import styles from "../styles/schedule.module.css"

export default function Schedule() {
  const schedule = [
    { time: "1:30pm", event: "Take your seats" },
    { time: "2:00pm", event: "Ceremony" },
    { time: "2:30pm", event: "Drinks reception" },
    { time: "4:00pm", event: "Not-wedding breakfast" },
    { time: "6:00pm", event: "Welcome evening guests" },
    { time: "7:00pm", event: "Kids disco" },
    { time: "7:30pm", event: "Party!" },
    { time: "8:00pm", event: "Pizza & chips" },
    { time: "12:00am", event: "The end" },
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