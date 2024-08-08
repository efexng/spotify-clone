'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import classnames from 'classnames'
import { HomeIcon  } from '@radix-ui/react-icons'
import { TbEdit } from "react-icons/tb";
import { BiSolidCreditCard } from "react-icons/bi";
import { MdLockOutline } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";

const Controller = () => {
    const currentPath = usePathname();

    const links = [
        {label: 'Account Overview', href: '/profile', icon: <HomeIcon />},
        {label: 'Edit Profile', href: '/editprofile', icon: <TbEdit /> },
        {label: 'Plans', href: '/plans', icon: <BiSolidCreditCard /> },
        {label: 'Change Password', href: '/changepassword', icon: <MdLockOutline /> },
        {label: 'Notification Settings', href: '/notificationsetting', icon: <IoNotificationsOutline /> },
        {label: 'Other Settings', href: '/othersettings', icon: <GoGear /> },
    ]

    return (
        <nav className='flex space-x-6 items-center justify-center'>
            <ul className='flex space-x-6'>
                {links.map(link => (
                    <li key={link.href}>
                        <Link
                            className={classnames(
                                'rounded-[20px] p-2 flex items-center space-x-2 hover:text-green-800 transition-colors',
                                {
                                    'bg-white text-black': link.href === currentPath,
                                    'bg-[#373737] text-white': link.href !== currentPath,
                                }
                            )}
                            href={link.href}
                        >
                            {link.icon && <span>{link.icon}</span>}
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Controller
