import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Main.module.css';

import Header from '../../components/Header/Header';
import { Item } from './Main.props';
import { UserProvider } from '../../components/Context/UserContext';

const Main = () => {
  return (
    <UserProvider>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </UserProvider>
  );
};

export default Main;

{
  /* <div className={styles.container}>
  <Header user={currentUser} onLogout={handleLogout} />
  <div className={styles.content}>
    <Outlet />
  </div>
</div>; */
}
