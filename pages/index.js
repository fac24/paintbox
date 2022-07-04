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
 
 import axios from "axios";
 
 const Auth = (props) => {
   const { username, setUsername, secret, setSecret } = useContext(Context);
 
   const router = useRouter();
 
   function onSubmit(e) {
     e.preventDefault();

     // when function is called, we check the login values. if they match an account, the api is called.
     if (username.length === 1 || secret.length === 1) return;
    
     //this is our get/create user api 
     axios
       .put(
         "https://api.chatengine.io/users/",
         { username, secret },
         { headers: { "Private-Key": "8d59ab89-27b4-4cff-8567-f3efbe6918be" } }
       )
 
       .then((r) => {
         router.push("/ChatroomHome");
       });
   }
 
   return (
    <div>
  <header>
    <h1>Paintbox</h1>
  </header>
  <Affirmation/> 
  <Navbar/>

  <ChatEngine
			height='100vh'
			userName='asmahan@gmail.com'
			userSecret='asmahan'
			projectID='b5f421d8-c533-47fa-9d4a-3df7b4d437db'
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
 
           <button type="submit" className="submit-button">
             Login / Sign Up
           </button>
         </form>
       </div>
     </div>
     </div>
   );
 };
 
 export default Auth;