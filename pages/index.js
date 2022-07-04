import { signIn } from "next-auth/react";
import Affirmation from "../components/affirmation/Affirmation";

function Landing() {
  return (
    <div>
      <section>
        <button onClick={signIn}>Login</button>
      </section>
      <Affirmation />
    </div>
  );
}

export default Landing;
