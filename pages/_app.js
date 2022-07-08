import Layout from "../components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import Nav from "../components/layout/Nav";
import { useState, useEffect } from "react";

import { supabase } from "../utils/supabaseClient";

import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [prompt, setPrompt] = useState("flower");
  const [authenticatedState, setAuthenticatedState] =
    useState("not-authenticated");

  useEffect(() => {
    /* fires when a user signs in or out */
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === "SIGNED_IN") {
          setAuthenticatedState("authenticated");
          setUserId(session.user.id);
          setUserEmail(session.user.email);
        }
        if (event === "SIGNED_OUT") {
          setAuthenticatedState("not-authenticated");
          setUserId("");
          setUserEmail("");
        }
      }
    );
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  async function checkUser() {
    /* when the component loads, checks user to show or hide Sign In link */
    const user = await supabase.auth.user();
    if (user) {
      setAuthenticatedState("authenticated");
      setUserId(user.id);
      setUserEmail(user.email);
    }
  }

  async function handleAuthChange(event, session) {
    /* sets and removes the Supabase cookie */
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }

  return (
    <SessionProvider session={session}>
      <Layout>
        {authenticatedState === "authenticated" && (
          <Nav>
            <Link href="/protected">
              <a>Protected</a>
            </Link>
          </Nav>
        )}

        <Component
          {...pageProps}
          userId={userId}
          userEmail={userEmail}
          prompt={prompt}
        />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
