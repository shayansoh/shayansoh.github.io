import styles from './TerminalWindow.module.css'

export default function TerminalWindow({ path = 'shayan@portfolio ~ zsh', children, className = '' }) {
  return (
    <div className={`${styles.window} ${className}`}>
      <div className={styles.chrome}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotYellow}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
        <span className={styles.path}>{path}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.scanlines} aria-hidden="true" />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}
