import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'

const NavBar = () => {

    const links = [
        {name: 'Dashboard', href: '/'},
        {name: 'Issues', href: '/issues'},
        // Add more links here...
  
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug /></Link>
        <ul className='flex space-x-6'>
            {links.map((link, index) => (
                <li key={index}>
                    <Link className='text-zinc-500 hover:text-zinc-800 transition-colors' href={link.href}>{link.name}</Link>
                </li>
            ))}
            <li></li>
        </ul>
    </nav>
  )
}

export default NavBar
