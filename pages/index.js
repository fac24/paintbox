// import { signIn, signOut, useSession } from "next-auth/react";
import Affirmation from "../components/affirmation/Affirmation";
import CommunityChat from "../components/chatroom/Chatroom";

function Landing() {
  // const { data: session } = useSession(); //renamed data to session

  // console.log(session);

  return (
    <div>
      <section>
        {/* {session ? (
          <div>
            <p>Logged in as {session.user.email}</p>
            <button onClick={signOut}>Log Out</button>
          </div>
        ) : (
          <button onClick={signIn}>Login</button>
        )} */}
      </section>
      <Affirmation />
      <CommunityChat />
    </div>
  );
}

export default Landing;