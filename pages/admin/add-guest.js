import { useEffect, useState } from 'react'
import GuestInputForm from '../../components/GuestInputForm'

export default function AddGuest() {
  const [success, setSuccess] = useState(false)
  const [addedGuestName, setAddedGuestName] = useState('')

  const [guest, setGuest] = useState({})

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const success = urlParams.get('success')
    const firstName = urlParams.get('firstName')
    const lastName = urlParams.get('lastName')
    setSuccess(success)
    setAddedGuestName(`${firstName} ${lastName}`)
  }, [])
  
  return (
    <div>
      <GuestInputForm guest={guest} setGuest={setGuest} success={success} addedGuestName={addedGuestName} />
    </div>
  )
}
