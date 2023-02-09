import styles from '../styles/venue.module.css'

export default function Venue() {
  const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.1164932520246!2d1.0243021157647068!3d51.364155079611855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9336783c76539%3A0xbbd14702a06986d7!2sEast%20Quay%20Venue!5e0!3m2!1sen!2suk!4v1665520952182!5m2!1sen!2suk"

  return(
    <div>
      <h1 className={styles.title}>The Venue</h1>
      <div className={styles.address}>
        The East Quay Venue<br />
        Whitstable<br />
        Kent<br />
        CT5 1AB<br />
        <p><a href='https://www.eqvenue.com/' target='_blank' className={styles.link}>Visit website</a><br /></p>
      </div>
      
      <p className={styles.map}>
        <iframe
          src={mapLink}
          style={{border: 0}}
          height="600px"
          width="100%"
          className="map"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </p>
    </div>
  )
}