import Input from './Input/index';
import SubmitButton from './SubmitButton/index';
import { useAuth } from './../../providers/auth-context';

const Form = () => {
  const {
    emailChangeHandler,
    passwordChangeHandler,
    switchAuthModeHandler,
    authMode
  } = useAuth();

  const submitHandler = e => e.preventDefault();

  return (
    <form className='mt-8 space-y-6' onSubmit={submitHandler}>
      <div className='rounded-md shadow-sm -space-y-px'>
        <Input
          onChange={emailChangeHandler}
          htmlFor='email'
          type='email'
          placeholder='Your Email'
        />
        <Input
          onChange={passwordChangeHandler}
          htmlFor='password'
          type='password'
          placeholder='Your Password'
        />
      </div>
      <div className='flex items-center justify-between'>
        <button
          onClick={switchAuthModeHandler}
          className='font-medium text-sm text-indigo-600 hover:text-indigo-500'>
          {authMode === 'Sign in' ? 'Create new account' : 'Have an account'}
        </button>
      </div>
      <SubmitButton />
    </form>
  );
};

export default Form;
