import Form from '../../components/LoginForm';
import Header from './Header/index';
import styles from './Auth.module.css';
import { Redirect } from 'react-router-dom';
import { useAuth } from './../../providers/auth-context';

const Auth = () => {
  const { userData } = useAuth();
  // Will redirect user to the dashboard page if he/she was not logged in
  if (userData) return <Redirect to='/' />;

  return (
    <div className={styles.Auth}>
      <div className='max-w-md w-full space-y-8'>
        <Header />
        <Form />
      </div>
    </div>
  );
};
export default Auth;
