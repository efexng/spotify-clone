'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfileName() {  // Renamed to follow convention
    const [profileName, setProfileName] = useState('');

    useEffect(() => {
        const fetchProfileName = async () => {
            try {
                const response = await axios.get('/api/profilename');
                setProfileName(response.data.profileName);
            } catch (error) {
                console.error('Failed to fetch profile name:', error);
            }
        };

        fetchProfileName();
    }, []);

    return (
        <div>
            <h1>{profileName ? `${profileName.toUpperCase()}` : 'Loading...'}</h1>
        </div>
    );
}

