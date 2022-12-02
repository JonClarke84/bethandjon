import styles from '../styles/hotelList.module.css'

export default function HotelList({ title, content, description, map }) {

  const dangerousContent = { __html: content }

  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <h2 className={styles.title}>{title}</h2>
        {content && <div className={styles.content} dangerouslySetInnerHTML={dangerousContent} />}
        {description && <p className={styles.description}>{description}</p>}
        {map &&
          <p className={styles.map}>
            <iframe
              src={map}
              style={{border: 0}}
              height="600px"
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