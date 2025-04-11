import styled from './InputLogIn.module.css'
import { useEffect, useReducer, useRef } from 'react'
import { formReducer, INITIAL_STATE } from '../LoginForm/LoginForm.state';
import Button from '../Button/Button';
import Input from '../Input/Input';


const InputLogIn = ({ onSubmit }) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const nameRef = useRef();

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.name:
        nameRef.current.focus();
        break;
    }
  }

  useEffect(() => {
    let timerId;
    if (!isValid.name) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' });
      }, 2000)
    }
    return () => {
      clearInterval(timerId);
    }
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values.name);
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit, values, onSubmit]);

  const onChange = (evt) => {
    dispatchForm({ type: 'SET_VALUE', payload: { [evt.target.name]: evt.target.value } })
  }

  const addFormLoginItem = (evt) => {
    evt.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
  }

  return (
    <form className={styled.form} onSubmit={addFormLoginItem}>
      <Input ref={nameRef} onChange={onChange} isValid={isValid.name} value={values.name} type="text" name='name' placeholder='Ваше имя' />
      <Button button_title={'Войти в профиль'} />
    </form>
  )
}

export default InputLogIn