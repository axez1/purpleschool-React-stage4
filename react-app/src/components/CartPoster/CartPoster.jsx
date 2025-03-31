import './CartPoster.css'
import starRating from '../../assets/star.svg'
import actionIconArm from '../../assets/like.svg'

const CartPoster = ({ url, name, likes }) => {
  return (
    <article className='cart__wrapper'>
      <div className="cart__rating">
        <img src={starRating} alt="star" className="cart__rating--star" />
        <span className="cart__rating--count">{likes}</span>
      </div>
      <div className="cart__poster">
        <img src={url} alt={name} className="cart__poster--image" />
      </div>
      <h3 className="cart__h3">{name}</h3>
      <button className="cart__button--action">
        <img src={actionIconArm} alt="Like icon" className="cart__button--icon" />
        <p className="cart__button--text">В избранное</p>
      </button>
    </article>
  );
};

export default CartPoster;