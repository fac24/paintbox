import React from "react";
import Link from "next/link";
import StyledSubmitButton from "../styled-components/StyledSubmitButton";
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
    <NavBar>
      <Link href="/"> Home </Link>
      {/* <Link href="/"> Community </Link> */}
      <Link href="/journal"> Journal </Link>
      <Link href="/upload"> Upload </Link>
      <Link href="/gallery"> Gallery </Link>
      {/* <Link href="/profile"> User Settings |</Link> */}

      <StyledSubmitButton onClick={signOut}>Logout</StyledSubmitButton>
    </NavBar>
  );
}

export default Nav;

const NavBar = styled.nav`
  background-color: white;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  float: left;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-content: center;
  justify-content: space-evenly;
  background-color: var(--lightly-white-pink);

  nav,
  a {
    float: left;
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    align-content: center;
    justify-content: space-evenly;
    text-align: center;
    text-decoration: none;
    font-size: 1.4rem;
    padding: 1rem;
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
