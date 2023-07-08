import styles from '../styles/menu.module.css'

const faqs = [
  {
    question: 'What should you wear?',
    answer: 'Smart but casual. Like you might wear to a big birthday party.'
  },
  {
    question: 'Will there be vegetarian and/or vegan options?',
    answer: 'Yes, we will have vegan pizza for the evening and a vegetarian option for the main meal. Please let us know if you have any other dietary requirements.'
  },
  {
    question: 'What about children?',
    answer: 'Children are more than welcome, there will be beach games and a children\'s disco.'
  },
  {
    question: 'Will there be anywhere to feed and change babies?',
    answer: 'Yes, there will be a private room for this.'
  },
  {
    question: 'Will I need cash?',
    answer: 'No. We will provide free drinks, once they\'re gone there will be a paid bar accepting card and cash.'
  },
  {
    question: 'Where\'s the gift list?',
    answer: 'Please no presents. Just your company is plenty!'
  },
  {
    question: 'No, I REALLY want to give you a present!',
    answer: 'Go on then! (There will be a table for cards)'
  },
]

export default function Faq() {
  return(
    <div>
      <h1 className={styles.title}>FAQs</h1>
      {faqs.map((item, index) => (
        <section className={styles.section}>
          <div key={index} className={styles.sectionContent}>
            <h3>{item.question}</h3>
            <ul>
              <li>{item.answer}</li>
            </ul>
          </div>
      </section>
      ))}
    </div>
  )
}