import { useState } from 'react'

export default function SubmitHotel () {

  const [name, setName] = useState('')
  const [googleMapUrl, setGoogleMapUrl] = useState('')
  const [description, setDescription] = useState('')

  async function handleSubmit (e) {
    e.preventDefault()

    await fetch('/api/hotel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        googleMapUrl,
        description
      })
    }).then(res => {
        alert('Hotel added!')
        setName('')
        setGoogleMapUrl('')
        setDescription('')
      }
    )
  }

  return (
    <div>
      <h1>Submit Hotel</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={e => setName(e.target.value)} value={name} />
          </li>
          <li>
            <label htmlFor="google-map-url">Google Map URL</label>
            <input type="text" id="google-map-url" onChange={e => setGoogleMapUrl(e.target.value)} value={googleMapUrl} />
          </li>
          <li>
            <label htmlFor="description">Description</label>
            <textarea id="description" onChange={e => setDescription(e.target.value)} value={description} />
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}