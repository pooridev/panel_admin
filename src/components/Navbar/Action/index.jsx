import { Link } from 'react-router-dom';
import styles from './Action.module.css';

const Action = ({ isMobile }) => {
  let signInstyles = [styles.SignIn];

  if (isMobile) {
    signInstyles = [styles.MobileSignIn];
  }

  return (
    <Link to='/login' className={signInstyles}>
      Sign in
    </Link>
  );
};

export default Action;
