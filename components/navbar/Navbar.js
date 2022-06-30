import React from 'react'
import Link from 'next/link'

 
function Navbar() {
    return (
        <nav className="navbar">
                <Link href='/homepage'><a>Home</a></Link>
                <Link href='#'><a>Community</a></Link>
                <Link href='#'><a>Journal</a></Link>
                <Link href='/upload'><a>Upload</a></Link>
                <Link href='#'><a>Gallery</a></Link>
        </nav>
    )
}
 
export default Navbar