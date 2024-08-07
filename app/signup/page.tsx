import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import SignupForm from './new/SignupForm'

const Signup = () => {
  return (
    <div className='container fixed'>
      <div className='logo-container'>
          <Link href='/'>
          <Image src='/logos.png' alt='Logo' width={286} height={117} />
          </Link>
      </div>

      <div className='content'>
        <div className='button-group'>
          <Link href='/signup/new'>
            <Button className='facebook-button'> <FaFacebookF /> Continue with Facebook </Button>
          </Link>
          <Link href='/signup/new'>
            <Button className='google-button'> <FcGoogle /> Continue with Google </Button>
          </Link>
          <Link href='/signup/new'>
            <Button className='discord-button'> <FaDiscord /> Continue with Discord </Button>
          </Link>
        </div>

        <div className='separator'>
          <div className='line top'></div>
          <span>or</span>
          <div className='line bottom'></div>
        </div>

        <div className='signupform'>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

export default Signup
