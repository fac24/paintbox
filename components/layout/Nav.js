import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav>
      <Link href="/home"> Home |</Link>
      <Link href="/"> Community |</Link>
      <Link href="/journal"> Journal |</Link>
      <Link href="/upload"> Upload |</Link>
      <Link href="/gallery"> Gallery |</Link>
      <Link href="/"> User Settings |</Link>
    </nav>
  );
}

export default Nav;
