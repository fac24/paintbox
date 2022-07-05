// import { axios } from "axios";

// import Login from "./login";

//  export default function Hello() {
//   return(
//  <div>
//   <header>
//     <h1>Paintbox</h1>
//   </header>
//   <Affirmation/>
//   <Navbar/>
//   <Login/>
// </div>
//   );
//  }

import Affirmation from "../components/affirmation/Affirmation";

import Navbar from "../components/navbar/Navbar";

import { ChatEngine } from "react-chat-engine";

import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

const Auth = (props) => {
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

//1) create a next.js API route (maybe call it chatengine-users) and copy the fetch() call into the api route. Inside the api route, call respond.send() when your chat engine api fetch resolves. Note that there will be two "response" objects - the response form the chat engine fetch call and the response sent back to the frontend from your api route. Name these separately!!! (one could be chatEngineResponse)


//2) modify the frontend fetch url with the url of your api route. it can stay as a put request.

    return (
      <div>
        <header>
          <h1>Paintbox</h1>
        </header>
        <Affirmation />
        {/* <Navbar/> */}

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
};

export default Auth;
