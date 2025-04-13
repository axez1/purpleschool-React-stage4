import styles from './HeadTitle.module.css';

function HeadTitle({ title }) {

  return (

    <h2 className={styles.h2}>{title}</h2>

  );
}

export default HeadTitle;
