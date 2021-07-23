import Form from '../../components/LoginForm';
import Header from './Header/index';
import styles from './Auth.module.css';

const Auth = () => (
  <div className={styles.Auth}>
    <div className='max-w-md w-full space-y-8'>
      <Header />
      <Form />
    </div>
  </div>
);

export default Auth;
