import styles from './MainParagraph.module.css';

function MainParagraph({ text, customSize = 16 }) {

  return (

    <p style={{ fontSize: `${customSize}px` }} className={styles.p}>{text}</p>

  );
}

export default MainParagraph;
