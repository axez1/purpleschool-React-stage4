import './NavHeader.css'
// import { Link } from 'react-scroll'
import loginIcon from '../../assets/Login.svg'

const NavHeader = () => {

  // const navItems = ['Поиск фильмов', 'Мои фильмы', 'Войти'];

  return (
    <nav className='nav'>
      <div className="nav__menu">
        {/* {navItems.map((item, index) => (
          <Link
            to={item}
            key={index}
            className='nav__link'
          >{item}</Link>
        ))} */}
        <a href="#" className='nav__link active'>Поиск фильмов</a>
        <a href="#" className='nav__link'>Мои фильмы
          <span className='nav__link-count'>0</span>
        </a>
        <a href="#" className='nav__link'>Войти
          <img src={loginIcon} alt="login icon" />
        </a>
      </div>
    </nav>
  )
}

export default NavHeader