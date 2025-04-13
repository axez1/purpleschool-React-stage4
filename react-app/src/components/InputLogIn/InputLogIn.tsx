import styles from './InputLogIn.module.css';
import { ChangeEvent, FormEvent, useEffect, useReducer, useRef } from 'react';
import { formReducer, INITIAL_STATE } from '../LoginForm/LoginForm.state';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { InputLogInProps } from './InputLogin.props';
import { useUser } from '../Context/UserContext';

const InputLogIn = ({ onSubmit }: InputLogInProps) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const nameRef = useRef<HTMLInputElement>();

  const focusError = (isValid: { name: boolean }) => {
    switch (true) {
      case !isValid.name:
        nameRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId: any;
    if (!isValid.name) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' });
      }, 2000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values.name);
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit, , values.name]);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatchForm({
      type: 'SET_VALUE',
      payload: { [evt.target.name]: evt.target.value },
    });
  };

  const addFormLoginItem = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
  };

  return (
    <form className={styles.form} onSubmit={addFormLoginItem}>
      <Input
        ref={nameRef}
        onChange={onChange}
        isValid={isValid.name}
        value={values.name}
        type="text"
        name="name"
        placeholder="Ваше имя"
      />
      <Button children={'Войти в профиль'} />
    </form>
  );
};

export default InputLogIn;

// const InputLogIn = ({ onSubmit }: InputLogInProps) => {
//   const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
//   const { isValid, isFormReadyToSubmit, values } = formState;
//   const nameRef = useRef<HTMLInputElement>();

//   const focusError = (isValid: { name: boolean }) => {
//     switch (true) {
//       case !isValid.name:
//         nameRef.current.focus();
//         break;
//     }
//   };

//   useEffect(() => {
//     let timerId: any;
//     if (!isValid.name) {
//       focusError(isValid);
//       timerId = setTimeout(() => {
//         dispatchForm({ type: 'RESET_VALIDITY' });
//       }, 2000);
//     }
//     return () => {
//       clearInterval(timerId);
//     };
//   }, [isValid]);

//   useEffect(() => {
//     if (isFormReadyToSubmit) {
//       onSubmit(values.name);
//       dispatchForm({ type: 'CLEAR' });
//     }
//   }, [isFormReadyToSubmit, values, onSubmit]);

//   const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
//     dispatchForm({
//       type: 'SET_VALUE',
//       payload: { [evt.target.name]: evt.target.value },
//     });
//   };

//   const addFormLoginItem = (evt: FormEvent<HTMLFormElement>) => {
//     evt.preventDefault();
//     dispatchForm({ type: 'SUBMIT' });
//   };

//   return (
//     <form className={styles.form} onSubmit={addFormLoginItem}>
//       <Input
//         ref={nameRef}
//         onChange={onChange}
//         isValid={isValid.name}
//         value={values.name}
//         type="text"
//         name="name"
//         placeholder="Ваше имя"
//       />
//       <Button children={'Войти в профиль'} />
//     </form>
//   );
// };
