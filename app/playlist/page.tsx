import Image from 'next/image';
import styles from '../components/Playlist.module.css';
import { Button, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { FaPlus } from "react-icons/fa6";
import Link from 'next/link';
import Controller from '../Controller';
import ProfileNameComponent from './new/page';  // Renamed import

// Updated to include only one music item
const music = [
    {
        image: '/music2.png',
        title: 'Create Playlist',
    }
];

export default function Home() {
    // Only one section of music
    const notifyMusic = music;

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
                    <Link href='/profile'>
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
                                        <FaPlus size='80' />
                                    </div>
                                    <h2 className={styles.musicTitle}>{item.title}</h2>
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
