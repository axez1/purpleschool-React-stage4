import CartPoster from '../CardPoster/CardPoster';
import mockedData from '../../data/data';
import styles from './DataSection.module.css';

const DataSection = () => {
  const posterArray = mockedData();

  return (
    <section className="section data__section">
      <div className="container">
        <div className={styles.data__section_wrapper}>
          {posterArray.map((item) => (
            <CartPoster
              key={item.id}
              id={item.id}
              url={item.url}
              name={item.namePoster}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSection;
