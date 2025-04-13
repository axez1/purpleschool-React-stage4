import styles from './MainParagraph.module.css';
import { HeadingProps } from './MainParagraph.props';

function MainParagraph({ text, customSize = 16 }: HeadingProps) {
  return (
    <p style={{ fontSize: `${customSize}px` }} className={styles.p}>
      {text}
    </p>
  );
}

export default MainParagraph;
