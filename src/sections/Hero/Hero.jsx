import { useEffect, useState, useRef, useCallback } from 'react'
import TerminalWindow from '../../components/TerminalWindow/TerminalWindow'
import styles from './Hero.module.css'

// Renders text character by character. Calls onComplete when done.
function TypedText({ text, speed = 45, active = false, onComplete }) {
  const [count, setCount] = useState(0)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    if (!active) return
    if (count >= text.length) {
      onCompleteRef.current?.()
      return
    }
    const t = setTimeout(() => setCount(c => c + 1), speed)
    return () => clearTimeout(t)
  }, [active, count, text, speed])

  // Reset if text changes (e.g. HMR)
  useEffect(() => { setCount(0) }, [text])

  return <>{text.slice(0, count)}</>
}

const S = {
  IDLE: -1, CMD1: 0, NAME: 1, ROLE: 2,
  SEP1: 3, CMD2: 4, TAGLINE: 5,
  SEP2: 6, CMD3: 7, SOCIAL: 8, CURSOR: 9,
}

export default function Hero() {
  const [step, setStep] = useState(S.IDLE)
  const advance = useCallback((to) => () => setStep(to), [])

  // Initial boot delay
  useEffect(() => {
    const t = setTimeout(() => setStep(S.CMD1), 500)
    return () => clearTimeout(t)
  }, [])

  // Non-typed transitions: separators and social pop in then advance
  useEffect(() => {
    if (step === S.SEP1)   { const t = setTimeout(() => setStep(S.CMD2),   200); return () => clearTimeout(t) }
    if (step === S.SEP2)   { const t = setTimeout(() => setStep(S.CMD3),   200); return () => clearTimeout(t) }
    if (step === S.SOCIAL) { const t = setTimeout(() => setStep(S.CURSOR), 400); return () => clearTimeout(t) }
  }, [step])

  const show = (s) => step >= s

  return (
    <section id="hero" className={styles.section}>
      <TerminalWindow
        path="shayan@portfolio ~ zsh"
        className={styles.window}
        bodyStyle={{ height: '460px', overflow: 'hidden' }}
      >

        {/* ❯ whoami */}
        {show(S.CMD1) && (
          <div className={styles.line}>
            <span className={styles.prompt}>❯</span>
            <span className={styles.cmd}>
              <TypedText text="whoami" speed={50} active={step === S.CMD1} onComplete={advance(S.NAME)} />
            </span>
          </div>
        )}

        {/* Shayan Sohail */}
        {show(S.NAME) && (
          <div className={styles.name}>
            <TypedText text="Shayan Sohail" speed={35} active={step === S.NAME} onComplete={advance(S.ROLE)} />
          </div>
        )}

        {/* // software-engineer */}
        {show(S.ROLE) && (
          <div className={styles.role}>
            <TypedText text="// software-engineer" speed={28} active={step === S.ROLE} onComplete={advance(S.SEP1)} />
          </div>
        )}

        {show(S.SEP1) && <div className={styles.separator} />}

        {/* ❯ cat tagline.txt */}
        {show(S.CMD2) && (
          <div className={styles.line}>
            <span className={styles.prompt}>❯</span>
            <span className={styles.cmd}>
              <TypedText text="cat tagline.txt" speed={40} active={step === S.CMD2} onComplete={advance(S.TAGLINE)} />
            </span>
          </div>
        )}

        {/* tagline output */}
        {show(S.TAGLINE) && (
          <div className={styles.tagline}>
            <TypedText
              text="Complexity is easy. Simplicity takes longer."
              speed={14}
              active={step === S.TAGLINE}
              onComplete={advance(S.SEP2)}
            />
          </div>
        )}

        {show(S.SEP2) && <div className={styles.separator} />}

        {/* ❯ cat links.txt */}
        {show(S.CMD3) && (
          <div className={styles.line}>
            <span className={styles.prompt}>❯</span>
            <span className={styles.cmd}>
              <TypedText text="cat links.txt" speed={40} active={step === S.CMD3} onComplete={advance(S.SOCIAL)} />
            </span>
          </div>
        )}

        {/* Social links */}
        {show(S.SOCIAL) && (
          <div className={styles.socialRow}>
            <a href="https://github.com/shayansoh" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shayansohail/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        )}

        {/* Blinking cursor */}
        {show(S.CURSOR) && (
          <div style={{ marginTop: '16px' }}>
            <span className={styles.line} style={{ display: 'inline-flex' }}>
              <span className={styles.prompt}>❯</span>
              <span className={styles.cursor} />
            </span>
          </div>
        )}

      </TerminalWindow>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollHintText}>scroll</span>
        <span className={styles.scrollHintArrow} />
      </div>
    </section>
  )
}
