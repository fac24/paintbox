import React from "react";
import Link from "next/link";
import styled from "styled-components";

function Nav() {
  return (
    <NavBar>
      <Link href="/home"> Home |</Link>
      <Link href="/"> Community |</Link>
      <Link href="/journal"> Journal |</Link>
      <Link href="/upload"> Upload |</Link>
      <Link href="/gallery"> Gallery |</Link>
      <Link href="/"> User Settings |</Link>
    </NavBar>
  );
}

export default Nav;

export const NavBar = styled.nav`
  background-color: var(--salmon-pink);
  position: fixed;
  z-index: 99;
  bottom: 0;
  width: 100%;
  overflow: auto;

  a {
    float: left;
    display: block;
    color: var(--aubergine-purple);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    width: 20%;
  }

  a:hover {
    background: var(--clear-white);
    color: var(--purple-supreme);
  }
`;
