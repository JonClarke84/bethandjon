'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/rsvp.module.css'

function stripWhitespace(str) {
  return str.replace(/\s/g, '')
}

function makeLowerCase(str) {
  return str.toLowerCase()
}

function checkIfPhone(str) {
  const regex = /^(\+44|0)7[0-9]{9}$/
  return regex.test(str)
}


export default function Rsvp() {
  const router = useRouter()
  const [alert, setAlert] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const input = e.target.form[0].value
    const strippedInput = stripWhitespace(input)
    const sanitisedInput = makeLowerCase(strippedInput)
    const isPhone = checkIfPhone(sanitisedInput)

    if(isPhone) {
      const family = await fetch('/api/getUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone: sanitisedInput })
      })
      const data = await family.json()
      if(data.message === 'error') {
        setAlert('Sorry, we couldn\'t find that number. Maybe try your partner\'s phone number instead.')
      } else {
        router.push(`/rsvp/${data[0].familyId}`)
      }
    } else {
      setAlert('Please enter a valid mobile phone number.')
      return
    }
  }

  return (
    <div>
      <h1 className={styles.title}>RSVP</h1>
      <form className={styles.form}>
      {alert && <p className={styles.alert}>{alert}</p>}
      <input type='text' name='email-phone-input' placeholder='Enter your mobile phone number' className={styles.textInput}></input>
      <button type="submit" onClick={handleSubmit} className={styles.button}>Sign in</button>
    </form>
    </div>
  )
}
