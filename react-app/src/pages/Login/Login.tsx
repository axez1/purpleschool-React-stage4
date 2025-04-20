import styles from './Login.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useUser } from '../../components/Context/UserContext';

const Login = () => {
  const { user } = useUser();

  return <>{!user && <LoginForm />}</>;
};

export default Login;
