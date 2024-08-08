import Image from 'next/image';
import styles from '../components/currentlyplaying.module.css';
import { Button, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Controller from '../Controller';
import ProfileNameComponent from '../homepage/new/page';
import { PiUserCircleFill } from "react-icons/pi";


const music = [
    {
        status: 'currently playing',
        image: '/music1.png',
        title: 'Song Name',
        artist: 'Efe'
    },
];

export default function Home() {


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

                <div className={styles.musicCard}>

                    <div className={styles.Music}>
                        {music.map((item, index) => (
                            <div className={styles.MusicItem} key={index}>
                                <div className={styles.Status}>{item.status}</div>
                                <div className={styles.Image}>
                                    <Image src={item.image} alt={item.title} width={200} height={200} />
                                </div>
                                <div className={styles.Title}>{item.title}</div>
                                <div className={styles.Artist}>
                                    <Image className={styles.UserIocn} src='/user.png' alt='Logo' width={30} height={30} />
                                    {item.artist}
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className={styles.MusicContoller}>
                        {music.map((item, index) => (
                            <div className={styles.MusicItem} key={index}>
                                <div className={styles.SoundWave}>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                    <div className={styles.Bar}></div>
                                </div>
                                <div className={styles.Image}>
                                    <Image src='/controller.png' alt={item.title} width={300} height={60} />
                                    <hr className={styles.CustomHR} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.Controller}>
                    <Controller />
                </div>
            </div>
        </>
    );
}
