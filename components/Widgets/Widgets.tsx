import Spotify from './Spotify/Spotify'
import styles from './Widgets.module.css'

const Widgets = () => {

    return (
        <div className={styles.container}>
            <Spotify />
        </div>
    )
}

export default Widgets