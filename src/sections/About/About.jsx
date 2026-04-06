import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './About.module.css'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.prompt}>
          <span className={styles.promptSymbol}>❯</span>
          <span className={styles.promptCmd}>cat ./about.md</span>
        </div>
        <h2 className={styles.sectionTitle}>About Me</h2>
      </motion.div>

      <motion.div
        className={styles.grid}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className={styles.bio}>
          {/* TODO: replace with your bio */}
          <p>
            Bio coming soon. This section will include a short introduction about who you
            are, your background, and what you&apos;re currently focused on building.
          </p>
          <p>
            Paragraph two — background, experience, and what drives your work.
          </p>
          <p>
            Paragraph three — current interests, what you&apos;re learning, or anything
            else you want to highlight.
          </p>
        </div>

        <div className={styles.factsPanel}>
          <div className={styles.factsPanelChrome}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
            <span className={styles.factsPanelPath}>quick-facts.json</span>
          </div>
          <div className={styles.factsPanelBody}>
            {/* TODO: replace with your details */}
            <div className={styles.factsGroup}>
              <div className={styles.factsLabel}>education</div>
              <div className={styles.factsItem}>Degree — Institution</div>
              <div className={styles.factsItem}>Degree — Institution</div>
            </div>
            <div className={styles.factsGroup}>
              <div className={styles.factsLabel}>background</div>
              <div className={styles.factsItem}>Industry / domain</div>
              <div className={styles.factsItem}>Skill / focus area</div>
            </div>
            <div className={styles.factsGroup}>
              <div className={styles.factsLabel}>currently building</div>
              <div className={styles.factsItem}>Project type</div>
              <div className={styles.factsItem}>Project type</div>
            </div>
            <div className={styles.factsGroup}>
              <div className={styles.factsLabel}>interests</div>
              <div className={styles.factsItem}>Interest one</div>
              <div className={styles.factsItem}>Interest two</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
