import { useAuth } from '../../../providers/auth-context';
import { LockClosedIcon } from '@heroicons/react/outline';
import Spinner from '../../Spinner';

const SubmitButton = () => {
  const { loading, authHandler, authMode } = useAuth();
  let iconButton = <Spinner />;

  if (!loading) {
    iconButton = (
      <LockClosedIcon
        className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
        aria-hidden='true'
      />
    );
  }

  return (
    <button
      onClick={authHandler}
      type='submit'
      className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
      <div className='absolute left-0 inset-y-0 flex items-center pl-3'>
        {iconButton}
      </div>
      {authMode}
    </button>
  );
};
export default SubmitButton;
