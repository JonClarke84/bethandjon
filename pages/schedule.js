import styles from "../styles/schedule.module.css"

export default function Schedule() {
  const schedule = [
    { time: "1:30pm", event: "Take your seats" },
    { time: "2:00pm", event: "The legal bit" },
    { time: "2:30pm", event: "Beers and beach games" },
    { time: "4:30pm", event: "Not-wedding breakfast" },
    { time: "6:00pm", event: "Welcome evening guests" },
    { time: "7:00pm", event: "Party!" },
    { time: "8:00pm", event: "Pizza, chips & pick 'n mix" },
    { time: "12:00am", event: "Bed time" }
  ]

  return (
    <div >
      <h1 className={styles.title}>Order of the day</h1>
      <ul className={styles.schedule}>
        {schedule.map((item, index) => (
          <div key={index}>
            <li><strong>{item.time}</strong> - {item.event}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}