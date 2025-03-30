import './Header.css'
import logoIcon from '../../assets/Bookmark.svg'
import NavHeader from '../NavHeader/NavHeader'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <a href="#" className='logo'>
            <img src={logoIcon} alt="logotype" />
          </a>
          <NavHeader />
        </div>
      </div>
    </header>
  )
}

export default Header