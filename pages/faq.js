import styles from '../styles/menu.module.css'

const faqs = [
  {
    question: 'What should you wear?',
    answer: 'Smart but casual. Like you might wear to a big birthday party. But if you want to come as Spiderman or Elsa etc, that\'s fine too!'
  },
  {
    question: 'Will there be vegetarian and/or vegan options?',
    answer: 'Yes, we will have vegan pizza for the evening and a vegetarian option for the main meal. Please let us know if you have any other dietary requirements.'
  },
  {
    question: 'What about children?',
    answer: 'Children are more than welcome, there will be beach games, children\'s canapés and a children\'s disco. All approved by Eleanor!'
  },
  {
    question: 'Will there be anywhere to feed and change babies?',
    answer: 'Yes, there will be a private room for this. The venue has high chairs and is pram-accessible.'
  },
  {
    question: 'Will I need cash?',
    answer: 'No. We will provide free drinks, once they\'re gone there will be a paid bar accepting card only.'
  },
  {
    question: 'What if it rains?',
    answer: 'The venue has its own outdoor area which we plan to use as much as possible, but if it does rain there is plenty of room for everyone inside.'
  },
  {
    question: 'Where\'s the gift list?',
    answer: 'Please no presents. Just your company is plenty!'
  },
  {
    question: 'No, I REALLY want to give you a present!',
    answer: 'Go on then! There will be a table for cards, but we don\'t have a gift list.'
  },
]

export default function Faq() {
  return(
    <div>
      <h1 className={styles.title}>FAQs</h1>
      {faqs.map(({ question, answer}, index) => (
        <section className={styles.section} key={index}>
          <div className={styles.sectionContent}>
            <h3>{question}</h3>
            <ul>
              <li>{answer}</li>
            </ul>
          </div>
      </section>
      ))}
    </div>
  )
}