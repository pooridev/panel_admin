import styles from './Action.module.css';

const Action = ({ type, isMobile }) => {
  let signInstyles = [styles.SignIn];
  let signUpstyles = [styles.SignUp];

  if (isMobile) {
    signInstyles = [styles.MobileSignIn];
    signUpstyles = [styles.MobileSignUp];
  }

  let action = null;
  switch (type) {
    case 'SIGN-UP':
      action = (
        <a href='/sign-up' className={signUpstyles}>
          Sign up
        </a>
      );
      break;
    case 'SIGN-IN':
      action = (
        <a href='/sign-in' className={signInstyles}>
          Sign in
        </a>
      );
      break;
    default:
      throw new Error('Should not reach out here');
  }

  return action;
};

export default Action;
