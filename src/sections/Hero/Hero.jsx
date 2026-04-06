import { useEffect, useState } from 'react'
import TerminalWindow from '../../components/TerminalWindow/TerminalWindow'
import styles from './Hero.module.css'

const SEQUENCE = [
  { id: 'cmd1',      delay: 400 },
  { id: 'name',      delay: 900 },
  { id: 'role',      delay: 1200 },
  { id: 'sep',       delay: 1500 },
  { id: 'cmd2',      delay: 1700 },
  { id: 'tagline',   delay: 2000 },
  { id: 'sep2',      delay: 2300 },
  { id: 'cmd3',      delay: 2500 },
  { id: 'social',    delay: 2800 },
  { id: 'cursor',    delay: 3100 },
]

export default function Hero() {
  const [visible, setVisible] = useState(new Set())

  useEffect(() => {
    const timers = SEQUENCE.map(({ id, delay }) =>
      setTimeout(() => setVisible(prev => new Set([...prev, id])), delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const v = id => visible.has(id) ? styles.visible : ''

  return (
    <section id="hero" className={styles.section}>
      <TerminalWindow path="shayan@portfolio ~ zsh" className={styles.window}>

        {/* whoami */}
        <div className={`${styles.line} ${v('cmd1')}`}>
          <span className={styles.prompt}>❯</span>
          <span className={styles.cmd}>whoami</span>
        </div>

        <div className={`${styles.name} ${v('name')}`}>Shayan Sohail</div>
        <div className={`${styles.role} ${v('role')}`}>// full-stack-engineer</div>

        <div className={`${styles.separator} ${v('sep')}`} />

        {/* tagline */}
        <div className={`${styles.line} ${v('cmd2')}`}>
          <span className={styles.prompt}>❯</span>
          <span className={styles.cmd}>cat tagline.txt</span>
        </div>
        <div className={`${styles.tagline} ${v('tagline')}`}>
          Building thoughtful software across web, mobile, and backend systems.
        </div>

        <div className={`${styles.separator} ${v('sep2')}`} />

        {/* social links */}
        <div className={`${styles.line} ${v('cmd3')}`}>
          <span className={styles.prompt}>❯</span>
          <span className={styles.cmd}>cat links.txt</span>
        </div>
        <div className={`${styles.socialRow} ${v('social')}`}>
          <a
            href="https://github.com/shayansoh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shayansohail/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* blinking cursor */}
        <div style={{ marginTop: '16px', minHeight: '20px' }}>
          <span className={`${styles.line} ${v('cursor')}`} style={{ display: 'inline-flex' }}>
            <span className={styles.prompt}>❯</span>
            <span className={`${styles.cursor} ${v('cursor')}`} />
          </span>
        </div>

      </TerminalWindow>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollHintText}>scroll</span>
        <span className={styles.scrollHintArrow} />
      </div>
    </section>
  )
}
