import styles from '../styles/Home.module.css'

export default function MainTitle({ title }) {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        {title}
      </h1>
    </div>
  )
}