import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
   <nav>
    <ul>
      <li>
        <Link href='#about' passHref>
          <a>About me</a >
        </Link>
      </li>
      <li>
        <Link href='#skills' passHref>
          Work skills
        </Link>
      </li>
      <li>
        <Link href='#projects' passHref>
          <a>Best projects</a>
        </Link>
      </li>
      <li>
        <Link href='#contact' passHref>
          <a>Contact me</a>
        </Link>
      </li>
     
    </ul>
   </nav>
  )
}

export default Navbar