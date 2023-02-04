import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './Spotify.module.css'

const Spotify = () => {

    const [playing, setPlaying] = useState<any>()

    const getSpotifyPlaying = async () => {
        try {
            fetch('https://api.spotify.com/v1/me/player/currently-playing', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_TOKEN}`
                }
            })
                .then((res) => res.json())
                .then((data) => setPlaying(data))
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getSpotifyPlaying()

    }, [])

    return playing ? (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    {playing.item.album.images.length > 1 && <Image src={playing.item.album.images[1].url} alt={'image'} layout="fill" objectFit="cover" unoptimized />}
                </div>
                <div className={styles.info}>
                    <div className={styles.albumName}>
                        {playing.item.album.name}
                    </div>
                    <div className={styles.artist}>
                        {playing.item.artists[0].name}
                    </div>
                </div>
            </div>
            <div className={styles.label}>
                Now playing album
            </div>
        </div>
    ) : <></>
}

export default Spotify