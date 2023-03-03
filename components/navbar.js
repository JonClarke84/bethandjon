'use client'

import styles from './navbar.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {

  const [active, setActive] = useState(false)

  const menuItems = [
    { name: 'Venue', href: '/venue' },
    { name: 'RSVP', href: '/rsvp' },
    { name: 'Menu', href: '/menu' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Hotels', href: '/hotels' },
    { name: 'FAQs', href: '/faq'}
  ]

  function handleClick() {
    setActive(!active)
  }

  function setFalse() {
    setActive(false)
  }

  const variants = {
    active: {
      x: 0,
      transition: {
        damping: 20,
        stiffness: 300,
        bounce: 0,
      }
    },
    inactive: {
      x: '100%',
      bounce: 0,
    },
  }

  return (
    <div className={styles.fixed}>
      <nav className={styles.navbar}>
        <a href={'/'}>
          <div className={styles.link} onClick={setFalse}><h3>Home</h3></div>
        </a>
        <div className={styles.hamburgerContainer} onClick={handleClick}>
          <div>
            <span className={styles.hamburger} />
            <span className={styles.hamburger} />
            <span className={styles.hamburger} />
          </div>
        </div>
      </nav>
      <motion.div
        initial={{ x: '100%' }}
        animate={active ? 'active' : 'inactive'}
        variants={variants}
        id='menu'
        className={styles.menuItems}
      >
        {menuItems.map(({ name, href }) => {
          return (
            <a key={name} href={href}>
              <div className={styles.dropdownLink} onClick={handleClick}><h3>{name}</h3></div>
            </a>
          )
        })}
      </motion.div>
    </div>
  )
}