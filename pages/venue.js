import Link from 'next/link'

export default function Venue() {

  const mapLink = 'https://www.google.com/maps/place/East+Quay+Venue,+Whitstable+Harbour,+Whitstable+CT5+1AB/@51.364155,1.026491,17z/data=!4m6!3m5!1s0x47d9336783c76539:0xbbd14702a06986d7!8m2!3d51.3641551!4d1.0264908!16s%2Fg%2F113k1v8cl?hl=en&gl=GB'

  return(
    <div>
      <h1>Venue Page</h1>
      <div>
        The East Quay Venue<br />
        Whitstable<br />
        Kent<br />
        CT5 1AB<br />
      </div>
      
      <p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.1164932520246!2d1.0243021157647068!3d51.364155079611855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9336783c76539%3A0xbbd14702a06986d7!2sEast%20Quay%20Venue!5e0!3m2!1sen!2suk!4v1665520952182!5m2!1sen!2suk"
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