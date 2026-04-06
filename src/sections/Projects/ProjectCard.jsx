import styles from './Projects.module.css'

export default function ProjectCard({ name, description, tags }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardPerm}>drwxr-xr-x</div>
      <div className={styles.cardName}>{name}</div>
      <p className={styles.cardDesc}>{description}</p>
      <div className={styles.cardTags}>
        {tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}
