import { signIn, signOut, useSession } from "next-auth/react";

import Affirmation from "../components/affirmation/Affirmation";

import Navbar from "../components/navbar/Navbar";

import { ChatEngine } from "react-chat-engine";

import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

function Landing() {
  const { data: session } = useSession(); //renamed data to session

  console.log(session);

  console.log(props);
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    // when function is called, we check the login values. if they match an account, the api is called.
    if (username.length === 1 || secret.length === 1) return;
//getserversideprops then fetch
    const URL = "https://api.chatengine.io/users/";

    let requestOptions = {
      method: "PUT",
      // redirect: "/ChatroomHome",
      headers: {
        "Private-Key": "8d59ab89-27b4-4cff-8567-f3efbe6918be",
      },
      body: JSON.stringify({
        username: { username },
        secret: { secret },
      }),
    };

    fetch(URL, requestOptions)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

  return (
    <div>
      <section>
        {session ? (
          <div>
            <p>Logged in as {session.user.email}</p>
            <button onClick={signOut}>Log Out</button>
          </div>
        ) : (
          <button onClick={signIn}>Login</button>
        )}
      </section>
      <Affirmation />
      <ChatEngine
          height="100vh"
          userName="asmahan@gmail.com"
          userSecret="asmahan"
          projectID="b5f421d8-c533-47fa-9d4a-3df7b4d437db"
        />

        <div className="background">
          <div className="auth-container">
            <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
              <div className="auth-title">NextJS Chat</div>

              <div className="input-container">
                <input
                  placeholder="Email"
                  className="text-input"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="input-container">
                <input
                  type="password"
                  placeholder="Password"
                  className="text-input"
                  onChange={(e) => setSecret(e.target.value)}
                />
              </div>

              <button
                onClick={(ChatroomHome) => alert("test123")}
                type="submit"
                className="submit-button"
              >
                Login / Sign Up
              </button>
            </form>
          </div>
        </div>
    </div>
  );
}
}

export default Landing;
