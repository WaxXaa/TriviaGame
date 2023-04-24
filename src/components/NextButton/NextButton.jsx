/* eslint-disable no-unused-vars */
import Styles from './NextButton.module.css'
import { Title } from '../Title/Title'
export function NextButton (
  {
    text,
    bcolor,
    enabled,
    setCheckres,
    checkers,
    setEnabled
  }
) {
  // console.table(text, color, enabled)
  const backgroundColor = (bcolor === 'green' && enabled)
    ? 'var(---green)'
    : ((bcolor === 'whiteG' || bcolor === 'whiteR') && enabled)
        ? 'var(---white)'
        : 'var(--gray)'
  const tcolor = (bcolor === 'whiteG') ? 'var(---green)' : (bcolor === 'whiteR') ? 'var(--red)' : 'var(---white)'
  function clickHandler () {
    if (checkers) {
      setCheckres(false)
      setEnabled(false)
    } else {
      setCheckres(true)
    }
  }
  function enableClick () {
    if (enabled) {
      return <button onClick={clickHandler} style={{ backgroundColor, cursor: 'pointer' }} className={Styles.btn}><Title color={tcolor} text={text} /></button>
    }
    return <button style={{ backgroundColor }} className={Styles.btn}><Title color={tcolor} text={text} /></button>
  }
  return (
    <>
    <div className={Styles.container}>
      {enableClick()}
    </div>
    </>
  )
}
