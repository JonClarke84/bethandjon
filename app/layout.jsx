import '../styles/globals.css'
import Navbar from '../components/navbar'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}