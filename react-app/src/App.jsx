import './App.css';
import DataSection from './components/DataSection/DataSection';
import Header from './components/Header/Header';

import HeadTitle from './components/HeadTitle/HeadTitle';
import MainParagraph from './components/MainParagraph/MainParagraph';
import SearchInput from './components/SearchInput/SearchInput';

function App() {

  return (
    <>
      <Header />
      <div className='search-block'>
        <HeadTitle title={'Поиск'} />
        <MainParagraph text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} />
        <SearchInput />
      </div>
      <DataSection />
    </>
  );
}

export default App;
