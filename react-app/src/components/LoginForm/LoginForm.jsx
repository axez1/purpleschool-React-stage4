import HeadTitle from '../HeadTitle/HeadTitle'
import InputLogIn from '../InputLogIn/InputLogIn'
import styled from './LoginForm.module.css'

const LoginForm = ({ onSubmit }) => {

  return (
    <div className={styled.form_wrapper}>
      <HeadTitle title={'Вход'} />
      <InputLogIn onSubmit={onSubmit} />
    </div >

  )
}

export default LoginForm