/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { Title } from '../components/Title/Title'
import Styles from './Question.module.css'
import { QuestionText } from '../components/QuestionText/QuestionText.jsx'
import { decode } from 'html-entities'
import { NextButton } from '../components/NextButton/NextButton.jsx'
import { useState } from 'react'
import { CheckRes } from '../components/CheckRes/CheckRes'
export function Questions (
  {
    load,
    data,
    index,
    isChoise,
    setIsChoise,
    enabled,
    setEnabled,
    setIndex
  }
) {
  // console.log(index)
  // console.log(data)
  const [checkres, setCheckres] = useState(false)
  const handleChoiseClick = (e) => {
    // console.log(e)
    if (e.target.localName === 'span') {
      console.log(e.target.innerText)
      setIsChoise(e.target.innerText)
      setEnabled(true)
      return
    }
    setIsChoise(e.target.value)
    setEnabled(true)
    // console.log(e.target.value)
  }
  // let options

  // if (question.type === 'multiple') {
  //   options = question.incorrect_answer.splice(Math.floor(Math.random() * 4), 0, question.correct_answer)
  //   console.log(options)
  // }

  if (load) {
    return (
      <>
      <div className={Styles.container}>
        <Title text={'Loading'}/>
        <div className={Styles.close} >
            <Link to="/">X</Link>
          </div>
        <div className={Styles.ball} ></div>
      </div>

      </>
    )
  }
  if (data) {
    const indexObject = data[index]
    const objArr = Object.entries(indexObject)
    let cat = objArr[0][1]
    const type = objArr[1][1]
    const correct = objArr[4][1]
    const incorrect = objArr[5][1]
    const question = objArr[3][1]
    let opt
    let ranIndx
    // console.log(cat)
    if (cat.startsWith('Entertainment: ')) {
      cat = cat.substr(15, cat.length)
    }
    // console.log(cat)
    if (cat.startsWith('Japanese ')) {
      cat = cat.substr(9, cat.length)
    }
    // console.log(cat)
    if (type === 'boolean') {
      opt = ['True', 'False']
    } else if (type === 'multiple') {
      for (let i = 0; i < incorrect.length; i++) {
        // console.table(incorrect, 'raw data')
        if (incorrect[i] === correct) {
          delete incorrect[i]
        }
      }
      ranIndx = Math.floor(Math.random() * 3)
      incorrect.splice(ranIndx, 0, correct)
      // console.table(incorrect, 'incorrects whit the correct')
      opt = incorrect
      // console.table(opt, 'options')
    }
    const showRes = () => {
      if (!checkres) {
        return <NextButton
              text={'Check'}
              bcolor={'green'}
              enabled={enabled}
              setCheckres={setCheckres}
              checkers={checkres}
              setEnabled={setEnabled}
              />
      } else {
        return <CheckRes
              correctAns={decode(correct)}
              index={index}
              setIndex={setIndex}
              setCheckRes={setCheckres}
              enabled={enabled}
              setEnabled={setEnabled}
              isChoise={isChoise}
              checkers={checkres}
              />
      }
    }
    const reset = () => {
      setCheckres(false)
      setIndex(0)
      setEnabled(false)
    }
    return (
      <>
        <div className={Styles.container}>
          <Title text={cat} />
          <div className={Styles.close} >
            <Link to="/" onClick={reset}><p>X</p></Link>
          </div>
          <div>
            <QuestionText text={decode(question)} />
          </div>
          <div className={Styles.options}>
            <ul>
              {opt.map((i) => {
                return (
                  <li key={i}>
                    <div className={Styles.labDiv} onClick={handleChoiseClick} >
                        <input type="radio" value={decode(i)} checked={isChoise === i} onChange={handleChoiseClick} /><span className={Styles.opt
                        }>{decode(i)}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          {showRes()}
          {/* {console.table(enabled, index)} */}
        </div>
      </>
    )
  }
}
