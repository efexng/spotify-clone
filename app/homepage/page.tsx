import Image from 'next/image'
import styles from '../components/Homepage.module.css'
import { Button, TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { IoIosPlay } from "react-icons/io";
import Link from 'next/link'
import Controller from '../Controller'


const music = [
    {
        image: '/music2.png',
        title: 'Today’s Top Hit',
        description: 'This is the description for song 2.'
    },
    {
        image: '/music3.png',
        title: 'All Out 2010s',
        description: 'This is the description for song 2.'
    },
    {
        image: '/music4.png',
        title: 'Chill Hits',
        description: 'This is the description for song 3.'
    },
    {
        image: '/music5.png',
        title: 'Viva Latino',
        description: 'This is the description for song 4.'
    },
    {
        image: '/music6.png',
        title: 'Rock Classics',
        description: 'This is the description for song 5.'
    },
    {
        image: '/music7.png',
        title: 'All Out 80s',
        description: 'This is the description for song 6.'
    },
    {
        image: '/music8.png',
        title: 'Coding Mode',
        description: 'This is the description for song 7.'
    },
    {
        image: '/music9.png',
        title: 'Focus Flow',
        description: 'This is the description for song 8.'
    },
    {
        image: '/music10.png',
        title: 'Instrumental Study',
        description: 'This is the description for song 9.'
    },
    {
        image: '/music2.png',
        title: 'Viva Latino',
        description: 'This is the description for song 10.'
    },
    {
        image: '/music3.png',
        title: 'Rock Classics',
        description: 'This is the description for song 11.'
    },
    {
        image: '/music4.png',
        title: 'All Out 2010s',
        description: 'This is the description for song 12.'
    }
];

export default function Home() {
    const notifyMusic = music.slice(0, 6);
    const focusMusic = music.slice(6);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.NavBar}>
                    <div className={styles.Logo}>
                        <Image src='/logos.png' alt='Logo' width={190} height={57} />
                        <h1>HELLO, EFE</h1>
                    </div>

                    <div className={styles.SearchBar}>
                        <TextField.Root placeholder="Search any Song...">
                            <TextField.Slot>
                                <MagnifyingGlassIcon className={styles.searchIcon} height="20" width="20" color='#737373' />
                            </TextField.Slot>
                        </TextField.Root>
                    </div>

                    <div className={styles.Profile}>
                        <Link href='/signup/new'>
                            <Button className={styles.ProfileButton}>My Profile</Button>
                        </Link>
                    </div>
                </div>

                <div className={styles.main}>
                <div className={styles.section}>
  <div className={styles.sectionHeaderContainer}>
    <h2 className={styles.sectionHeader}>Spotify Playlist</h2>
    <p>SEE ALL</p>
  </div>
  <div className={styles.cardContainer}>
    {notifyMusic.map((item, index) => (
      <div
        key={index}
        className={`${styles.musicCard} ${
          index === 0 ? styles.firstCard : styles.otherCards
        }`}
      >
        <div className={styles.imageContainer}>
          <Image src={item.image} alt={item.title} width={200} height={200} />
          {index === 0 && <IoIosPlay className={styles.playicon} />}
        </div>
        <h2 className={styles.musicTitle}>{item.title}</h2>
        <p className={styles.musicDescription}>{item.description}</p>
      </div>
    ))}
  </div>
                    </div>

                    <div className={styles.section}>
                        <div className={styles.sectionHeaderContainer}>
                            <h2 className={styles.sectionHeader}>Focus</h2>
                            <p>SEE ALL</p>
                        </div>
                        <div className={styles.cardContainer}>
                            {focusMusic.map((item, index) => (
                                <div key={index} className={`${styles.musicCard} ${styles.otherCards}`}>
                                    <Image src={item.image} alt={item.title} width={200} height={200} />
                                    <h2 className={styles.musicTitle}>{item.title}</h2>
                                    <p className={styles.musicDescription}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.Controller}>
                    <Controller />
                </div>
            </div>
        </>
    )
}
