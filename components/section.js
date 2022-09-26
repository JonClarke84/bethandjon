import styles from './section.module.css'
import classNames from 'classnames'

export default function Section({ id, title, content }) {
  return (
    <section key={id} className={classNames(styles.section)}>
      <h2 className={styles.title}>{title}</h2>
      <p>{content}</p>
    </section>
  )
}