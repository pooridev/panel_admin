import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAuth } from './../../providers/auth-context';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { userData, logoutHandler } = useAuth();

  const fakeAvatar = userData.email.slice(
    userData.email[1],
    userData.email.length - (userData.email.length - 1)
  );

  return (
    <Menu as='div' className='ml-3 relative'>
      {({ open }) => (
        <>
          <Menu.Button className='bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-indigo-800'>
            <span className='sr-only'>Open user menu</span>
            <span className='text-2xl text-white leading-6 h-8 w-8'>
              {fakeAvatar}
            </span>
          </Menu.Button>
          <Transition
            show={open}
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items
              static
              className='origin-top-right z-10 absolute md:right-0 -left-20 md:left-auto mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <Menu.Item
                as={Link}
                to='/profile'
                className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'>
                Profile
              </Menu.Item>
              <Menu.Item
                as={Link}
                to='/settings'
                className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'>
                Settings
              </Menu.Item>
              <Menu.Item
                as={Link}
                to='/login'
                onClick={logoutHandler}
                className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700'>
                Sign out
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Profile;
