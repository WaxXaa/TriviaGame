/* eslint-disable no-unused-vars */
import Styles from './Difficulty.module.css'
import { NavMenu } from '../components/Nav/NavMenu'
import { Link, useNavigate } from 'react-router-dom'
import { Box } from '../components/Box/Box'
import { Title } from '../components/Title/Title'
export function Difficulty ({ setData, category, setIndex, setLoad }) {
  const navigate = useNavigate()
  const handleDifficulty = (difficulty) => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${category.id}&difficulty=${difficulty}`)
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        // console.log(data)
        setData(data.results)
        setLoad(false)
        setIndex(0)
      })
  }

  const boxSize = {
    h: 'big',
    w: 'big',
    m: '70px 0'
  }
  const boxes = [{
    text: 'Easy',
    color: '#89e219ff'
  }, {
    text: 'Medium',
    color: '#ff9600ff'
  }, {
    text: 'Hard',
    color: '#ff4b4bff'
  }]
  return (
        <>
          <div className={Styles.container}>
            <Title text={category.name}/>
            <div className={Styles.difficulty}>
              <ul>
                {boxes.map((b) => {
                  return (
                    <li key={b.color}>
                      <Link to='/question'>
                        <div onClick={() => handleDifficulty(b.text.toLowerCase())}>
                        <Box size={boxSize} text={b.text} borderColor={b.color} />
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            </div>
            <NavMenu/>
        </>
  )
}
