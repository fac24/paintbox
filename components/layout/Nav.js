import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { supabase } from "../../utils/supabaseClient";

function Nav() {
  const router = useRouter();

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <nav>
      <Link href="/home"> Home |</Link>
      <Link href="/"> Community |</Link>
      <Link href="/journal"> Journal |</Link>
      <Link href="/upload"> Upload |</Link>
      <Link href="/gallery"> Gallery |</Link>
      <Link href="/profile"> User Settings |</Link>

      <button onClick={signOut}>Logout</button>
    </nav>
  );
}

export default Nav;
