import React from "react";
import Link from "next/link";
import styled from "styled-components";
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
      <Link href="/"> Home |</Link>
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

export const NavBar = styled.nav`
  background-color: var(--deep-soothing-ocean);
  // position: fixed;
  z-index: 99;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  // height: 80px;

  nav,
  a {
    float: left;
    margin-left: 1rem;
    display: flex;
    flex-wrap: wrap;
    color: var(--aubergine-purple);
    text-align: left;
    // padding: 14px 16px;
    text-decoration: none;
    font-size: 1.8rem;
    width: 18.5%;
    padding: 2.5rem;
    border-right: 5px solid var(--purple-supreme);
  }

  nav,
  a:hover {
    background: var(--clear-white);
    color: var(--purple-supreme);
  }

  // for mobile screens.
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    padding: 2%;
    max-width: 100%;
    // width: 19.6%;

    a {
      margin-left: 0;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      padding: 1rem;
      font-size: 1rem;
      align-items: center;
      width: 100%;
      border-right: none;
    }
  }
`;
