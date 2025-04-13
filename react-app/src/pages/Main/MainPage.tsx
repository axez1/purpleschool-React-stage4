import styles from './MainPage.module.css';
import HeadTitle from '../../components/HeadTitle/HeadTitle';
import MainParagraph from '../../components/MainParagraph/MainParagraph';
import DataSection from '../../components/DataSection/DataSection';
import SearchInput from '../../components/SearchInput/SearchInput';

const MainPage = () => {
  return (
    <>
      <div className="search-block">
        <HeadTitle title={'Поиск'} />
        <MainParagraph
          text={
            'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
          }
        />
        <SearchInput />
      </div>
      <DataSection />
    </>
  );
};

export default MainPage;
