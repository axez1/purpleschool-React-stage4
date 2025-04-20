import styles from './Header.module.css';
import logoIcon from '../../assets/Bookmark.svg';
import NavHeader from '../NavHeader/NavHeader';
import { Link } from 'react-router-dom';
import { useUser } from '../Context/UserContext';

const Header = () => {
  const { user, logout } = useUser();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <Link to="/" className={styles.logo}>
            <img src={logoIcon} alt="logotype" />
          </Link>
          <NavHeader user={user} onLogout={logout} />
        </div>
      </div>
    </header>
  );
};

export default Header;
