import Link from "next/link"
import styles from '../../styles/Home.module.css'

export default function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <ul>
        <li>
          <Link href="/admin/add-hotel">
            <span className={styles.adminLink}>Add Hotel</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/add-guest">
            <span className={styles.adminLink}>Add Guest</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/invites">
            <span className={styles.adminLink}>Invite List</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/update">
            <span className={styles.adminLink}>Update messages</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}