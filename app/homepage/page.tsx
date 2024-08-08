import Image from 'next/image';
import styles from '../components/Homepage.module.css';
import { Button, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { IoIosPlay } from "react-icons/io";
import Link from 'next/link';
import Controller from '../Controller';
import ProfileNameComponent from './new/page';  // Renamed import

const music = [
    {
        image: '/music2.png',
        title: 'Today’s Top Hit',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
    },
    {
        image: '/music3.png',
        title: 'All Out 2010s',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
    },
    {
        image: '/music4.png',
        title: 'Chill Hits',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
    },
    {
        image: '/music5.png',
        title: 'Viva Latino',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
    },
    {
        image: '/music6.png',
        title: 'Rock Classics',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
    },
    {
        image: '/music7.png',
        title: 'All Out 80s',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
    },
    {
        image: '/music8.png',
        title: 'Coding Mode',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
    },
    {
        image: '/music9.png',
        title: 'Focus Flow',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
    },
    {
        image: '/music10.png',
        title: 'Instrumental Study',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
    },
    {
        image: '/music2.png',
        title: 'Viva Latino',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
    },
    {
        image: '/music3.png',
        title: 'Rock Classics',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
    },
    {
        image: '/music4.png',
        title: 'All Out 2010s',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .'
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
                        <ProfileNameComponent />  {/* Updated component */}
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
                                <div key={index} className={`${styles.musicCard} ${index === 0 ? styles.firstCard : styles.otherCards}`}>
                                    <div className={styles.imageContainer}>
                                        <Image src={item.image} alt={item.title} width={200} height={200} />
                                        {index === 0 && <IoIosPlay className={styles.playicon} />}                                    </div>
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
    );
}
