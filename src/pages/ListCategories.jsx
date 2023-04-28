/* eslint-disable no-unused-vars */
import { NavMenu } from '../components/Nav/NavMenu'
import { Link } from 'react-router-dom'
import Styles from './ListCategories.module.css'
import { categories } from '../assets/categories'
import { Box } from '../components/Box/Box'
import { Title } from '../components/Title/Title'
export default function ListCategories ({ setCategory, setLoad }) {
  const link = 'difficulty'
  const boxSize = {
    h: 'med',
    w: 'big',
    m: '20px'
  }

  setLoad(true)
  return (
    <>

        <div className={Styles.container}>
          <Title text={'Categories'}/>
          <div className={Styles.content}>
                <ul className={Styles.ul}>

              {categories.map((c) => {
                return (
                 <li key={c.id}>
                    <div onClick={() => setCategory({ id: c.id, name: c.name })}>
                      <Link to={link}>
                        <Box
                          size={boxSize}
                          text={c.name}
                          borderColor={c.color}
                        />
                      </Link>
                    </div>
                  </li>)
              })}

                </ul>

          </div>

        </div>
        <NavMenu/>
    </>
  )
}
