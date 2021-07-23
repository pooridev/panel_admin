import { useAuth } from './../../../providers/auth-context';

const Header = () => {
  const { authMode } = useAuth();
  return (
    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
      {authMode === 'Sign in'
        ? 'Sign in to your account'
        : 'Create new account'}
    </h2>
  );
};
export default Header;
