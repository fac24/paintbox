import React, { useState } from "react";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";

const DirectChat = () => {
  // The useState hook initially sets the username to an empty string
  const [username, setUsername] = useState("");

  // Custom function that will implement the getOrCreateChat function that to select username to chat with
  function implementingDirectChat(creds) {
    getOrCreateChat(
      creds,
      // function will only work if the app is a Direct Messaging one, hence setting 'is_direct_chat' to true and consequentially setting a list of usernames to search from.
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  const displayChatInterface = (creds) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Find username"
          value={username} //prop from the useState hook
          // A controlled function that sets the username to what the user types in the input field
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* clicking button will call the implementingDirectChat function that displays a list of usernames to create or find an existing chat.  */}
        <button onClick={() => implementingDirectChat(creds)}>
          Create Chat
        </button>
      </div>
    );
  };

  return (
    <ChatEngine
      height="100vh"
      width="100vw"
      // Accessing the stored environment variables
      projectID={process.env.CHAT_APP_PROJECT_ID}
      userName="asmahan@gmail.com"
      userSecret={process.env.CHAT_APP_USER_SECRET}
      displayNewChatInterface={(creds) => displayChatInterface(creds)}
    />
  );
};

export default DirectChat;
