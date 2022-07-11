import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

export default function Navbar() {
  return (
    <div className='float-right mr-7 mt-5 text-2xl font-bold'>
      <Link ref={Menu} href='/Menu'>
        <a>
      -Menu </a>
        </Link></div>
  )
}
