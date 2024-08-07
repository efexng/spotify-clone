'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import classnames from 'classnames'

const NavBar = () => {
  const currentPath = usePathname();
   
   const layoutPath = '/';

   if (currentPath !== layoutPath) {
       return null;
   }
    const links = [
        {label: 'Sign up', href: '/signup',},
        {label: 'Log in', href: '/login'},
    ]

  return (
    <nav className='flex px-5 h-14 items-center '>
        <ul className='flex items-center space-x-6 ml-auto mt-10 mr-5 fixed right-5'>
          {links.map((link, index) => [
            <Link
              key={link.href}
              className={classnames({
                  'text-white-900': link.href === currentPath,
                  'text-white-500': link.href !== currentPath,
                  'hover:text-zinc-800 transition-colors': true,
                  'bg-white text-black rounded-full px-4 py-2': link.label === 'Log in' // Specific styles for "Log in"
              })}
              href={link.href}
            >
              {link.label}
            </Link>,
            index < links.length - 1 && <div className="border-l border-zinc-300 h-10 mx-4" key={`divider-${index}`} />
          ])}
        </ul>
    </nav>
  )
}

export default NavBar
