'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { MdOutlineHorizontalRule } from "react-icons/md";
import classnames from 'classnames'

const Footer = () => {
   const currentPath = usePathname();
   
   const layoutPath = '/';

   if (currentPath !== layoutPath) {
       return null;
   }

   const links = [
       {label:<CiYoutube color='white' />, href: '/'},
       {label: <FaXTwitter color='white' /> , href: '/issues'},
       {label: <CiInstagram color='white'/>, href: '/issues'},
       {label: <FaFacebookF color='white'/>, href: '/issues'},
   ]

   return (
       <footer className='flex space-x-6 mb-5 px-5 h-14 items-center justify-center fixed inset-x-0 bottom-0'>
           <div className='flex justify-center items-center w-full max-w-screen-lg'>
               <hr className='w-[156px] border-t-1 border-white mx-2' />
               <div className='flex space-x-5 items-center mx-4'>
                   {links.map(link =>
                       <Link
                           key={link.href}
                           className={classnames({
                               'text-zinc-300': link.href === currentPath,
                               'text-zinc-500': link.href !== currentPath,
                               'hover:text-zinc-800 transition-colors': true
                           })}
                           href={link.href}>
                           {link.label}
                       </Link>
                   )}
               </div>
               <hr className='w-[156px] border-t-1 border-white mx-2' />
           </div>
       </footer>
   )
}

export default Footer
