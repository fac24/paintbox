import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Login from "../components/authentication/Login";

import { FaGithub, FaGoogle } from "react-icons/fa";
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
              <Login />

              <h3 className="login_h3">Or use your social account</h3>
              <div className="social_buttons">
                <button className="google" onClick={signInWithGoogle}>
                  <FaGoogle className="socaillogicon" />
                  Login with Google
                </button>
                <button className="github" onClick={signInWithGithub}>
                  <FaGithub className="socaillogicon" />
                  Login with GitHub
                </button>
              </div>
            </div>
            <hr></hr>
            <div className="signup_div">
              <Link href="/signup" passHref>
                <button className="signup_button" variant="contained">
                  Sign up here if you are not registered
                </button>
              </Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default LoginPage;
