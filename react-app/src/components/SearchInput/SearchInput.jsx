import { useState } from 'react'
import Button from '../Button/Button'
import styles from './SearchInput.module.css'
import search from '../../assets/search.svg'

const SearchInput = () => {

  const [inputData, setInputData] = useState('')

  const inputChange = (evt) => {
    setInputData(evt.target.value)
  }

  const addSubmitForm = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const formProps = Object.fromEntries(formData);
  }

  return (

    <form className={styles.search_form} onSubmit={addSubmitForm}>
      <img className={styles.search_button} src={search} alt='search button' />
      <input className={styles.input} name='search' type='text' value={inputData} onChange={inputChange} placeholder='Введите название' />
      <Button button_title={'Искать'} onClick={() => { }} />
    </form>

  )
}

export default SearchInput
