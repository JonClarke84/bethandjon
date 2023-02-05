import PageLayout from "../components/pageLayout"
import styles from "../styles/schedule.module.css"

export default function Schedule() {
  const schedule = [
    { time: "1:30pm", event: "Day time guests arrive" },
    { time: "6:00pm", event: "Evening guests arrive" },
    { time: "Midnight", event: "The End" },
  ]

  return (
    <PageLayout title="Schedule" description="Schedule">
      <h1>Order of the day</h1>
      <ul>
        {schedule.map((item, index) => (
          <div key={index}>
            <li>{item.time} - {item.event}</li>
          </div>
        ))}
      </ul>
    </PageLayout>
  )
}