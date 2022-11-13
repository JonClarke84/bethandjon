import styles from './navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {

  const [active, setActive] = useState(false)

  const menuItems = [
    { name: 'RSVP', href: '/rsvp' },
    { name: 'Venue', href: '/venue' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Food', href: '/food' },
    { name: 'Hotels', href: '/hotels' },
  ]

  function handleClick() {
    setActive(!active)
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
        <Link href={'/'}>
          <a className={styles.link}><h3>Home</h3></a>
        </Link>
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
            <Link key={name} href={href}>
              <a className={styles.dropdownLink}><h3>{name}</h3></a>
            </Link>
          )
        })}
      </motion.div>
    </div>
  )
}