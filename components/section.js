import styles from './section.module.css'
import classNames from 'classnames'

export default function Section({ title, content }) {

  return (
    <section className={classNames(styles.section)}>
      <h2 className={styles.title}>{title}</h2>
      <p>{content}</p>
    </section>
  )
}