/* eslint-disable no-unused-vars */
import { Title } from '../components/Title/Title'
import { Box } from '@mui/material'
import Styles from './Results.module.css'
import { useNavigate } from 'react-router-dom'
import { score } from '../components/CheckRes/CheckRes'
import completed from '../assets/completed.wav'
import notCompleted from '../assets/notCompleted.mp3'
// eslint-disable-next-line no-undef
const completedS = new Audio(completed)
// eslint-disable-next-line no-undef
const notCpletedS = new Audio(notCompleted)
export function Results () {
  console.log(score.value)
  const navigate = useNavigate()
  const goHome = () => {
    score.value = 0
    navigate('/')
  }
  console.log()
  function sound () {
    completedS.currentTime(0)
    notCpletedS.currentTime(0)
    if (score <= 4) {
      notCpletedS.play()
    } else {
      completedS.play()
    }
  }
  let bcolor = 'var(---green)'
  if (score <= 7) {
    bcolor = 'var(---orange)'
  } else if (score <= 4) {
    bcolor = 'var(--red)'
  }
  console.log('results')
  return (
        <>
          <div className={Styles.container}>
            <Title text={'Results!'}/>
            <Box sx={{
              display: 'flex',
              width: 125,
              height: 96,
              border: ` 3px solid ${bcolor}`,
              borderRadius: '10px',
              boxShadow: '1px 7px 8px rgba(0,0,0,28%)',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.5rem',
              margin: '10px 0 0 0'
            }
            }>{score} / 10</Box>
              <Box sx={{
                display: 'flex',
                width: '90vw',
                height: 60,
                borderRadius: '20px',
                boxShadow: '2px 2px rgba(0,0,0,28%)',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px 0',
                backgroundColor: 'var(---green)',
                position: 'fixed',
                bottom: 5
              }
              } onClick={goHome} ><Title text={'Finish'} color={'var(---white)'}/></Box>
          </div>
          {sound()}
        </>

  )
}
