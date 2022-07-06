import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Login from "../components/authentication/Login";
import { supabase } from "../utils/supabaseClient";

function LoginPage() {
  const [sessionId, setSessionId] = useState(supabase.auth.session() || "");

  const router = useRouter();

  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn(
      {
        provider: "google",
      },
      {
        redirectTo: "http://localhost:3000/",
      }
    );
    router.push("/");
  }

  async function signInWithGithub() {
    const { user, session, error } = await supabase.auth.signIn(
      {
        provider: "github",
      },
      {
        redirectTo: "http://localhost:3000/",
      }
    );
    router.push("/");
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
    setSessionId("");
    router.push("/login");
  }

  return (
    <div>
      <section>
        {sessionId ? (
          <div>
            <p>Logged in as {sessionId.user.email}</p>
            <button onClick={signout}>Log Out</button>
          </div>
        ) : (
          <>
            <div>
              <h2>Log in with email and password</h2>
              <Login />
              <h3>Or use your social account</h3>
              <button onClick={signInWithGoogle}>Login with Google</button>
              <button onClick={signInWithGithub}>Login with GitHub</button>
            </div>
            <hr></hr>
            <div>
              <Link href="/signup">
                <a>Sign up here if you are not registered</a>
              </Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default LoginPage;
