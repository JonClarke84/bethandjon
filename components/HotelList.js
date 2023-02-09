import styles from '../styles/hotellist.module.css'
import Link from 'next/link'

export default function HotelList({ title, content, url, description, map }) {
  const dangerousContent = { __html: content }

  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <h2 className={styles.title}>{title}</h2>
        {url && <Link href={url} target="_blank"><span className={styles.link}>Visit website</span></Link>}
        {content && <div className={styles.content} dangerouslySetInnerHTML={dangerousContent} />}
        {description && <p className={styles.description}>{description}</p>}
        {map &&
          <p className={styles.map}>
            <iframe
              src={map}
              style={{border: 0}}
              height="300px"
              width="100%"
              className="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </p>}
      </div>
    </section>
  )
}