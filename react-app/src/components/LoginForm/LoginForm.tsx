import { useUser } from '../Context/UserContext';
import HeadTitle from '../HeadTitle/HeadTitle';
import InputLogIn from '../InputLogIn/InputLogIn';
import styled from './LoginForm.module.css';

const LoginForm = () => {
  const { login } = useUser();

  return (
    <div className={styled.form_wrapper}>
      <HeadTitle title={'Вход'} />
      <InputLogIn onSubmit={login} />
    </div>
  );
};

export default LoginForm;
