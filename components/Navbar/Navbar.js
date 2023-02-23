import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

    <ul>
      <li><Image src="" alt="LinkedIn Icon" /></li>
      <li><Image src="" alt="Github Icon" /></li>
      <li><Image src="" alt="Instagram Icon" /></li>
      <li><Image src="" alt="Twitter Icon" /></li>
    </ul>
   </nav>
  )
}

export default Navbar