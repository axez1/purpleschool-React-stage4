import styles from './CartPoster.module.css'
import starRating from '../../assets/star.svg'
import actionIconArm from '../../assets/like.svg'

const CartPoster = ({ url, name, likes }) => {
  return (
    <article className={styles.cart__wrapper}>
      <div className={styles.cart__rating}>
        <img src={starRating} alt="star" className={styles.cart__rating_star} />
        <span className={styles.cart__rating_count}>{likes}</span>
      </div>
      <div className={styles.cart__poster}>
        <img src={url} alt={name} className={styles.cart__poster_image} />
      </div>
      <h3 className={styles.cart__h3}>{name}</h3>
      <button className={styles.cart__button_action}>
        <img src={actionIconArm} alt="Like icon" className={styles.cart__button_icon} />
        <p className={styles.cart__button_text}>В избранное</p>
      </button >
    </article >
  );
};

export default CartPoster;