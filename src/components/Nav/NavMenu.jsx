// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import Styles from './NavMenu.module.css'
export function NavMenu () {
  return (
    <div className={Styles.container}>
        <div className={Styles.elipse}>
        <svg width="115" height="76" viewBox="0 0 115 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M114.5 36.9435C114.5 53.387 82.2335 76 56 76C29.7665 76 0 55.445 0 36.9435C13.5 36.9435 29.7665 0 56 0C82.2335 0 97.5 36.9435 114.5 36.9435Z" fill="#89E219"/>
        </svg>
        </div>
        <div className={Styles.rect}>
            <Link to="/">
                <div className={Styles.homeIcon}>
                    <svg width="54" height="47" viewBox="0 0 54 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.52 0L0 19.89H6.63V46.41H19.89V33.15H33.15V46.41H46.41V19.6911L53.04 19.89L26.52 0Z" fill="black"/>
                    </svg>
                </div>
            </Link>
        </div>

    </div>
  )
}
