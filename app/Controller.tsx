'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import classnames from 'classnames'

const Controller = () => {
   const currentPath = usePathname();

    const links = [
        {label: 'Currently Playing', href: '/currrentlyplaying'},
        {label: 'Home', href: '/homepage'},
        {label: 'Your Library', href: '/libary'},
        {label: 'Create Playlist', href: '/playlist'},
  
    ]
  return (
    <nav className='flex space-x-6 items-center justify-center'>
        <ul className='flex space-x-6'>
          {links.map(link =>
          <Link
            key={link.href}
            className={classnames({
                'text-white-900': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-green-800 transition-colors': true
            })}
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Controller
