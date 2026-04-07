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
          <p>
            I&apos;m a software engineer and technical consultant based in Toronto. At Deloitte,
            I lead end-to-end delivery on enterprise engagements, from architecture and API
            design to CI/CD pipelines and production deployments.
          </p>
          <p>
            My background spans machine learning, data engineering, and full-stack development.
            Before consulting, I worked as a data scientist and ML engineer, building forecasting
            models, ETL pipelines, and anomaly detection systems. Earlier still, I worked as
            an automation engineer, writing control logic and scripting process automation
            across manufacturing systems.
          </p>
          <p>
            The problems I find most interesting sit at the edge of technical and organizational.
            You&apos;re not just writing code, you&apos;re figuring out why a handoff keeps
            breaking, or what would change if data moved in real time instead of overnight.
            Most of the time, getting it right starts with asking better questions.
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
            <div className={styles.factsGroup}>
              <div className={styles.factsLabel}>education</div>
              <div className={styles.factsItem}>MEng, Data Analytics &amp; ML &mdash; U of Toronto</div>
              <div className={styles.factsItem}>BASc, Mech Eng &mdash; U of Waterloo</div>
            </div>
            <div className={styles.factsGroup}>
              <div className={styles.factsLabel}>background</div>
              <div className={styles.factsItem}>Enterprise software &amp; consulting</div>
              <div className={styles.factsItem}>ML &amp; data engineering</div>
            </div>
            <div className={styles.factsGroup}>
              <div className={styles.factsLabel}>interests</div>
              <div className={styles.factsItem}>Photography</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
