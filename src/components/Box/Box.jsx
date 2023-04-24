/* eslint-disable no-unused-vars */
import Styles from './Box.module.css'
export function Box ({ size, text, borderColor }) {
  const height = (size.h === 'big')
    ? '115px'
    : (size.h === 'extra')
        ? '155px'
        : '82px'
  const width = (size.w === 'big')
    ? '85vw'
    : '75vw'
  const fs = (size.fs === 'med')
    ? '1.4rem'
    : '32px'
  const style = {
    height: `${height}`,
    border: `3px solid ${borderColor}`,
    width: `${width}`,
    margin: `${size.m}`,
    fontSize: `${fs}`
  }
  return (
    <>
        <div style={style} className={Styles.box} >
            <p className={Styles.text}>{text}</p>
        </div>
    </>
  )
}
