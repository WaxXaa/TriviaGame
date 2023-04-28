/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import correct from '../../assets/correct.mp3'
import wrong from '../../assets/wrong.mp3'

import Styles from './CheckRes.module.css'
import { NextButton } from '../NextButton/NextButton'
import { Link } from 'react-router-dom'
import { Title } from '../Title/Title'
import { signal } from '@preact/signals-react'
export const score = signal(0)

const correctS = new Audio(correct)
const wrongS = new Audio(wrong)
export function CheckRes (
  {
    correctAns,
    index,
    setIndex,
    setCheckRes,
    checkers,
    enabled,
    setEnabled,
    isChoise
  }
) {
  const isCorrect = isChoise === correctAns
  function sound () {
    console.log('sound')
    if (isCorrect) { correctS.play() } else {
      wrongS.play()
    }
  }
  console.log('signal')
  const Ttext = isCorrect ? 'Correct' : 'Incorrect'
  const background = isCorrect ? '#89e219ff' : '#ff4b4bff'
  const handlerIndex = () => {
    if (isCorrect) {
      score.value++
    }
    if (index === 9) {
      setIndex(0)
      setEnabled(false)
    } else {
      const idx = index + 1
      setIndex(idx)
    }
  }
  function renderBtnToEnd () {
    if (index === 9) {
      return (
        <Link to="/results" >
          <div className={Styles.btn} onClick={handlerIndex}>
            <NextButton
            text={'Continue'}
            bcolor={isCorrect ? 'whiteG' : 'whiteR' }
            enabled={enabled}
            setCheckres={setCheckRes}
            checkers={checkers}
            setEnabled={setEnabled}/>
          </div>
          </Link>
      )
    } else {
      return <div className={Styles.btn} onClick={handlerIndex}>
            <NextButton
            text={'Continue'}
            bcolor={isCorrect ? 'whiteG' : 'whiteR' }
            enabled={enabled}
            setCheckres={setCheckRes}
            checkers={checkers}
            setEnabled={setEnabled}/>
          </div>
    }
  }
  return (
    <>
      <div className={Styles.container}>
        <div style={{ backgroundColor: background }} className={Styles.box} >
          <Title text={Ttext} color={'var(---white)'} />
          <h4 >Correct Answer :</h4> <br/>
          <p>{correctAns}</p>
          {renderBtnToEnd()}
          {sound()}
        </div>
      </div>
    </>
  )
}
