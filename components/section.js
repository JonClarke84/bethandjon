import styles from './section.module.css'
import classNames from 'classnames'

export default function Section({ title, content }) {

  const dangerousContent = { __html: content }

  return (
    <section className={classNames(styles.section)}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content} dangerouslySetInnerHTML={dangerousContent} />
    </section>
  )
}