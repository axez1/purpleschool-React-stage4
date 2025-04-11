import CartPoster from '../CartPoster/CartPoster'
import mockedData from '../../data/data.js'
import styles from './DataSection.module.css'

const DataSection = () => {

  const posterArray = mockedData();

  return (
    <section className='section data__section'>
      <div className="container">
        <div className={styles.data__section_wrapper}>
          {posterArray.map((item) => (
            < CartPoster
              key={item.id}
              url={item.url}
              name={item.namePoster}
              likes={item.likes}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DataSection