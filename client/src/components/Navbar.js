import styles from '../styles/Navbar.module.scss';
import image from '../assets/teenovator-logo.png';
import banner from '../assets/Teenovator-1920x1080.png';

const Navbar = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img className={styles.teenLogo} src={image} alt="Teenovator Logo" />
                </div>
            </div>
            <div className={styles.banner}>
                <div>
                    <img className={styles.bannerLogo} src={banner} alt="Teenovator Banner" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;