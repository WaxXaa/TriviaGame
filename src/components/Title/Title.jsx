import Styles from './Title.module.css'
export const Title = ({ text, color }) => {
  const style = { color }
  if (color) {
    return (
      <h1 style={style} className={Styles.text}>{text}</h1>
    )
  }
  return (
    <h1 className={Styles.text}>{text}</h1>
  )
}
