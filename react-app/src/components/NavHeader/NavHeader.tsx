import styles from './NavHeader.module.css';
import loginIcon from '../../assets/Login.svg';
import userIcon from '../../assets/user.svg';
import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { MouseEvent } from 'react';
import { NavHeaderProps } from './NavHeader.props';

const NavHeader = ({ user, onLogout }: NavHeaderProps) => {
  const handleLogoutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onLogout(evt);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__menu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(styles.nav__link, {
              [styles.active]: isActive,
            })
          }>
          Поиск фильмов
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            cn(styles.nav__link, {
              [styles.active]: isActive,
            })
          }>
          Мои фильмы
          <span className={styles.nav__link_count}>0</span>
        </NavLink>
        {user ? (
          <div className={styles.user_wrapper}>
            <div className={styles.user_name_wrapper}>
              <span className={styles.user_name}>{user.name}</span>
              <img src={userIcon} alt="login icon" />
            </div>
            <Link
              to="/"
              onClick={handleLogoutClick}
              className={styles.nav__logout}>
              Выйти
            </Link>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              cn(styles.nav__link, {
                [styles.active]: isActive,
              })
            }>
            Войти
            <img src={loginIcon} alt="login icon" />
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavHeader;
