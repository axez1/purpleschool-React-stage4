import styles from './Button.module.css';

function Button({ button_title, onClick }) {

  return (

    <button className={styles.button} onClick={onClick}>{button_title}</button>

  );
}

export default Button;
