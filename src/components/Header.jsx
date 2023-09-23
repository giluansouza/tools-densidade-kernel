import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="logo" />
            <h3>Tools - Densidade Kernel</h3>
        </header>
    )
}