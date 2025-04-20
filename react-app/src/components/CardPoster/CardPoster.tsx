import styles from './CartPoster.module.css';
import starRating from '../../assets/star.svg';
import actionIconArm from '../../assets/like.svg';
import { Link } from 'react-router-dom';
import { CardPosterProps } from './CardPoster.props';

const CartPoster = ({ id, url, name, rating }: CardPosterProps) => {
  return (
    <Link to={`/single/${id}`} className={styles.cart__wrapper}>
      <div className={styles.cart__rating}>
        <img src={starRating} alt="star" className={styles.cart__rating_star} />
        <span className={styles.cart__rating_count}>{rating}</span>
      </div>
      <div className={styles.cart__poster}>
        <img src={url} alt={name} className={styles.cart__poster_image} />
      </div>
      <h3 className={styles.cart__h3}>{name}</h3>
      <button className={styles.cart__button_action}>
        <img
          src={actionIconArm}
          alt="Like icon"
          className={styles.cart__button_icon}
        />
        <p className={styles.cart__button_text}>В избранное</p>
      </button>
    </Link>
  );
};

export default CartPoster;
