import HeadTitle from '../../components/HeadTitle/HeadTitle';
import MainParagraph from '../../components/MainParagraph/MainParagraph';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './Error.module.css';

const Error = () => {
  return (
    <>
      <div className={styles.search_block}>
        <HeadTitle title={'Поиск'} />
        <MainParagraph
          text={
            'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
          }
        />
        <SearchInput />
      </div>
      <div className={styles.info}>
        <h2 className={styles.h2}>Упс... Ничего не найдено</h2>
        <div className={styles.map}>
          <p className={styles.p}>
            Попробуйте изменить запрос или ввести более точное
          </p>
          <p className={styles.p}>название фильма</p>
        </div>
      </div>
    </>
  );
};

export default Error;
