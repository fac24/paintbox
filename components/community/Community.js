// where we build the actual chatroom

import { ChatEngine } from "react-chat-engine";

import React, { useState, useEffect } from "react";

function ChatRoomEl(props) {
//   const [username, setUsername] = useState("");
//   const [secret, setSecret] = useState("");
//   const [chatroom, setChatroom] = useState(false);

  return (
    <div>
      <section>
        <div>
          <h1>Welcome To the Mood Community</h1>
          <p>Tell us how you are feeling</p>
        </div>
      </section>

      <section>
      <div className="background">
      <div className="shadow">
        <ChatEngine
        //   height="calc(100vh - 212px)"
          projectID="b5f421d8-c533-47fa-9d4a-3df7b4d437db"
        //   chatID="125894"
          userName={username}
          userSecret={secret}
        //   renderNewMessageForm={() => <MessageFormSocial />}
        height='100vh'
			renderChatList={(chatAppState) => {}}
			renderChatCard={(chat, index) => {}}
			renderNewChatForm={(creds) => {}}
			renderChatFeed={(chatAppState) => {}}
			renderChatHeader={(chat) => {}}
			renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {}}
			renderIsTyping={(typers) => {}}
			renderNewMessageForm={(creds, chatId) => {}}
			renderChatSettings={(chatAppState) => {}}
			renderChatSettingsTop={(creds, chat) => {}} 
			renderPeopleSettings={(creds, chat) => {}}
			renderPhotosSettings={(chat) => {}}
			renderOptionsSettings={(creds, chat) => {}}
        />
      </div>
    </div>
      </section>
    </div>
  );
}

export default ChatRoomEl;
