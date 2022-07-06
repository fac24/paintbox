// 1) use state with usernames and passwords because we need to keep track of use state
// 2) function to return a form which users then fill in.
// 3) users will then be redirected in chat room.
// 4) creating a chat room component.

// component:
// use state for the username/secret
// use state for the chat
// verify the user -> if they don't exist, redirect to home if they exist, redirect to chatroom

// fetch:
// fetch request -> taking the username and secret

import { useState } from "react";
import { useRouter } from 'next/router';

function CommunityChat() {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const router = useRouter();
  
  const handleSubmit = (event) => {
    event.preventDefault()

    const URL = "https://api.chatengine.io/users/";
    // console.log("please find data");
    // console.log(URL);

    const requestOptions = {
    method: "PUT",
    headers: {
      "Private-Key": "8d59ab89-27b4-4cff-8567-f3efbe6918be",
    },
    body: JSON.stringify({
      username: { username },
      secret: { secret },
    }),
  };

//   console.log(requestOptions);

    const userData = fetch(URL, requestOptions)
    .then((response) => console.log(response.json()))
    .then((data) => console.log(data))
    .then(router.push("/community"))
    .catch((error) => console.error(error));

  console.log("userData");
  console.log(userData);
  };

  return (
    <div>
      <form className="chatroom-form" onSubmit={handleSubmit}>
        <label className="chatroom-username">
          <input
            type="text"
            placeholder="Username"
            value={username}
            className="text-input"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>

        <label className="chatroom-password">
          <input
            type="password"
            value={secret}
            placeholder="Password"
            className="text-input"
            onChange={(e) => setSecret(e.target.value)}
          />
        </label>

        <button
          onClick={handleSubmit}
          type="submit"
          className="submit-button"
        >
          Login / Sign Up
        </button>
      </form>
    </div>
  );
}
console.log(CommunityChat);

export default CommunityChat;
