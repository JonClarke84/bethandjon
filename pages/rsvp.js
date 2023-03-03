'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/rsvp.module.css'

function stripWhitespace(str) {
  return str.replace(/\s/g, '')
}

function checkIfFourDigitNumber(str) {
  return /^\d{4}$/.test(str)
}

export default function Rsvp() {
  const router = useRouter()
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)
  const error = router.query.error

  async function handleSubmit(e) {
    e.preventDefault()
    const input = e.target.form[0].value
    const strippedInput = stripWhitespace(input)
    const isValidNumber = checkIfFourDigitNumber(strippedInput)
    
    if(isValidNumber) {
      const family = await fetch('/api/getFamily', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ loginNumber: strippedInput })
      })
      const data = await family.json()
      if(data.message === 'error') {
        setAlert('Sorry, something went wrong. Please try again later. If you continue to have problems, please let us know.')
      } else if (!data[0]) {
        setAlert('Sorry, we couldn\'t find a family with that login number.')
      } else {
        setLoading(true)
        router.push(`/rsvp/${data[0].familyId}`)
      }
    } else {
      setAlert('Please enter a valid login number.')
      return
    }
  }

  return (
    <div>
      <h1 className={styles.title}>RSVP</h1>
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
        </div>
      ):(
        <form className={styles.form}>
        {alert && <p className={styles.alert}>{alert}</p>}
        {error && <p className={styles.alert}>Sorry, something went wrong. Please try again.</p>}
        <input type='text' name='login-number-input' placeholder='Enter your login number' className={styles.textInput}></input>
        <button type="submit" onClick={handleSubmit} className={styles.button}>Sign in</button>
      </form>
      )}
    </div>
  )
}
