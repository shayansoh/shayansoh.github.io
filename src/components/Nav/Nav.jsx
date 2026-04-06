import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>SS</a>
      <div className={styles.links}>
        <a href="#projects" className={styles.link}>[projects]</a>
        <a href="#about" className={styles.link}>[about]</a>
      </div>
    </nav>
  )
}
