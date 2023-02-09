import PageLayout from "../components/pageLayout"
import styles from "../styles/schedule.module.css"

export default function Schedule() {
  const schedule = [
    { time: "1:30pm", event: "Day time guests arrive" },
    { time: "6:00pm", event: "Evening guests arrive" },
    { time: "Midnight", event: "The End" },
  ]

  return (
    <div >
      <h1 className={styles.title}>Order of the day</h1>
      <ul className={styles.schedule}>
        {schedule.map((item, index) => (
          <div key={index}>
            <li>{item.time} - {item.event}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}