import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
          <p>Copyright © 2023 - <a href='https://devboot.com.br' target='_blank'>Devboot</a></p>
        </footer>
    )
}