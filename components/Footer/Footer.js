import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <ul>
        <li><Image src="" alt="LinkedIn Icon" /></li>
        <li><Image src="" alt="Github Icon" /></li>
        <li><Image src="" alt="Instagram Icon" /></li>
        <li><Image src="" alt="Twitter Icon" /></li>
      </ul>

      <span>© {new Date().getFullYear()} | Designed by Barbara Morantes</span>
    </div>
  )
}

export default Footer