import { useParams } from 'react-router-dom';
import styles from './SinglePage.module.css';

import imagePreview from '../../assets/1.png';
import star from '../../assets/star.svg';
import likeIcon from '../../assets/like.svg';

const SinglePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.subtitle}>Поиск фильмов</p>
        <h3 className={styles.title}>Avengers: Endgame</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.body_preview}>
          <img src={imagePreview} alt="Avengers: Endgame poster" />
        </div>
        <div className={styles.body_info}>
          <p className={styles.description}>
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies, the Avengers must assemble once more in
            order to undo Thanos' actions and restore order to the universe once
            and for all, no matter what consequences may be in store.
          </p>
          <div className={styles.rating_block}>
            <div className={styles.rating}>
              <img src={star} alt="star icon" />
              <span className={styles.span}>8.3</span>
            </div>
            <button className={styles.button}>
              <img src={likeIcon} alt="add to favorites" />
              <p className={styles.button_name}>В избранное</p>
            </button>
          </div>
          <div className={styles.type}>
            <div className={styles.p}>Тип</div>
            <div className={styles.h3}>Movie</div>
          </div>
          <div className={styles.date}>
            <div className={styles.p}>Дата выхода</div>
            <div className={styles.h3}>2019-04-24</div>
          </div>
          <div className={styles.duration}>
            <div className={styles.p}>Длительность</div>
            <div className={styles.h3}>181 мин</div>
          </div>
          <div className={styles.genre}>
            <div className={styles.p}>Жанр</div>
            <div className={styles.h3}>Adventure, Science Fiction, Action</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.reviews}>Отзывы</div>
        <div className={styles.reviews_wrapper}>
          <div className={styles.footer_header}>
            <div className={styles.footer_title}>
              Not as good as infinity war..
            </div>
            <div className={styles.footer_date}>2019-04-29</div>
          </div>
          <div className={styles.footer_text}>
            But its a pretty good film. A bit of a mess in some parts, lacking
            the cohesive and effortless feel infinity war somehow managed to
            accomplish. Some silly plot holes and characters that could&apos;ve
            been cut (Ahem, captain marvel and thanos). The use of Captain
            marvel in this film was just ridiculous. Shes there at the start,
            bails for some reason? And then pops up at the end to serve no
            purpose but deux ex machina a space ship...
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
