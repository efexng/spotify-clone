import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import LoginForm from './new/LoginForm';
import styles from '../components/Login.module.css'


const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
          <Link href='/'>
          <Image src='/logos.png' alt='Logo' width={286} height={117} />
          </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.buttonGroup}>
          <Link href='/signup/new'>
            <Button className={styles.facebookButton} > <FaFacebookF /> Continue with Facebook </Button>
          </Link>
          <Link href='/signup/new'>
            <Button className={styles.googleButton} > <FcGoogle /> Continue with Google </Button>
          </Link>
          <Link href='/signup/new'>
            <Button className={styles.discordButton} > <FaDiscord /> Continue with Discord </Button>
          </Link>
        </div>

        <div className={styles.separator}>
          <div className={`${styles.line} ${styles.top}`}></div>
          <span className={styles.orText}>or</span>
          <div className={`${styles.line} ${styles.bottom}`}></div>
        </div>


        <div className={styles.loginform}>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
