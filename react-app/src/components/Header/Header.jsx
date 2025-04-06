import styles from './Header.module.css'
import logoIcon from '../../assets/Bookmark.svg'
import NavHeader from '../NavHeader/NavHeader'

const Header = ({ user, onLogout }) => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__wrapper}>
          <a href="#" className={styles.logo}>
            <img src={logoIcon} alt="logotype" />
          </a>
          <NavHeader user={user} onLogout={onLogout} />
        </div>
      </div>
    </header>
  )
}

export default Header