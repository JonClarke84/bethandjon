import PageLayout from "../components/pageLayout"
import styles from "../styles/schedule.module.css"

export default function Schedule() {

  const schedule = [
    { time: "1:30pm", event: "Arrival" },
    { time: "2:00pm", event: "Service" },
    { time: "2:30pm", event: "Drinks reception" },
    { time: "4:00pm", event: "Dinner" },
    { time: "6:00pm", event: "Evening reception kicks off" },
    { time: "11:00pm", event: "The End" },
  ]

  return (
    <PageLayout title="Schedule" description="Schedule">
      <h1>The Day</h1>
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