import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    name: 'web-app/',
    description: 'Full-stack web application. Coming soon.',
    tags: ['react', 'node.js', 'postgresql'],
  },
  {
    name: 'api-service/',
    description: 'Backend API service. Coming soon.',
    tags: ['rest', 'typescript', 'docker'],
  },
  {
    name: 'mobile-app/',
    description: 'Cross-platform mobile application. Coming soon.',
    tags: ['react native', 'ios', 'android'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.prompt}>
          <span className={styles.promptSymbol}>❯</span>
          <span className={styles.promptCmd}>ls ./projects</span>
        </div>
        <h2 className={styles.sectionTitle}>Personal Projects</h2>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {PROJECTS.map(project => (
          <motion.div key={project.name} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className={styles.cta}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        // hobby projects in progress — check back soon
      </motion.p>
    </section>
  )
}
