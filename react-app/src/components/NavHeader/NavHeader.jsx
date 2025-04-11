import styles from './NavHeader.module.css'
import loginIcon from '../../assets/Login.svg'
import userIcon from '../../assets/user.svg'

const NavHeader = ({ user, onLogout }) => {

  const handleLogoutClick = (e) => {
    e.preventDefault();
    onLogout();
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__menu}>
        <a href="#" className={`${styles.nav__link} ${styles.active}`}>Поиск фильмов</a>
        <a href="#" className={styles.nav__link}>Мои фильмы
          <span className={styles.nav__link_count}>0</span>
        </a>
        {user ? (
          <div className={styles.user_wrapper}>
            <div className={styles.user_name_wrapper}>
              <span className={styles.user_name}>{user.name}</span>
              <img src={userIcon} alt="login icon" />
            </div>
            <button
              onClick={handleLogoutClick}
              className={styles.nav__logout}
            >
              Выйти
            </button>
          </div>
        ) : (
          <a href="#" className={styles.nav__link}>
            Войти
            <img src={loginIcon} alt="login icon" />
          </a>
        )}
      </div>
    </nav >
  )
}

export default NavHeader