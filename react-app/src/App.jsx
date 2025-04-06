import { useEffect, useState } from 'react';
import './App.css';
import DataSection from './components/DataSection/DataSection';
import Header from './components/Header/Header';

import HeadTitle from './components/HeadTitle/HeadTitle';
import LoginForm from './components/LoginForm/LoginForm';
import MainParagraph from './components/MainParagraph/MainParagraph';
import SearchInput from './components/SearchInput/SearchInput';

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setItems(data.map(item => ({
        ...item
      })))
    }
  }, []);

  useEffect(() => {
    if (items.length) {
      localStorage.setItem('data', JSON.stringify(items));
    }
  }, [items])

  const currentUser = items.find(item => item.isLogined) || null;

  const handleLogin = (name) => {
    const newItems = items.map(item => ({
      ...item,
      isLogined: false
    }));

    const existingUserIndex = newItems.findIndex(item => item.name === name);

    if (existingUserIndex >= 0) {
      newItems[existingUserIndex].isLogined = true;
    } else {
      newItems.push({ name, isLogined: true });
    }

    setItems(newItems);
  };

  const handleLogout = () => {
    const newItems = items.map(item => ({
      ...item,
      isLogined: false
    }));
    setItems(newItems);
  };

  return (
    <>
      <Header user={currentUser} onLogout={handleLogout} />
      <div className='search-block'>
        <HeadTitle title={'Поиск'} />
        <MainParagraph text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} />
        <SearchInput />
      </div>
      <DataSection />
      {!currentUser && <LoginForm onSubmit={handleLogin} />}
    </>
  );
}

export default App;
