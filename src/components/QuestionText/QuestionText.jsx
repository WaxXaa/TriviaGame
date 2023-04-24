/* eslint-disable no-unused-vars */
import styles from './questionText.module.css'
export function QuestionText ({ text }) {
  return (
    <>
      <div className={styles.questionBox} >
          <p>{text}</p>
      </div>
    </>
  )
}
