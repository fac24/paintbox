import Link from "next/link";
import { useState } from "react";
import Signup from "../components/authentication/Signup";
import { supabase } from "../utils/supabaseClient";
import StyledDiv from "../components/styled-components/StyledDiv";

function SignUpPage() {
  const [sessionId, setSessionId] = useState(supabase.auth.session() || "");

  async function signout() {
    const { error } = await supabase.auth.signOut();
    setSessionId("");
  }

  return (
    <StyledDiv>
      <section>
        {sessionId ? (
          <div>
            <p>Logged in as {sessionId.user.email}</p>
            <button onClick={signout}>Log Out</button>
          </div>
        ) : (
          <>
            <div>
              <h2>Sign up with email and password</h2>
              <Signup />
            </div>
            <hr></hr>
            <div>
              <Link href="/login">
                <a>Log in here if you already have an account</a>
              </Link>
            </div>
          </>
        )}
      </section>
    </StyledDiv>
  );
}

export default SignUpPage;
