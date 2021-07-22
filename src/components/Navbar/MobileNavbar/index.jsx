import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import NavbarItem from '../NavbarItem';
import Logo from './../../Logo/index';

const MobileNavbar = ({ open }) => {
  return (
    <Transition
      show={open}
      as={Fragment}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'>
      <Popover.Panel
        focus
        static
        className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
          <div className='pt-5 pb-2 px-5'>
            <Logo />
          </div>
          <div className='py-2 px-5 space-y-6'>
            <nav className='grid grid-cols-1 gap-y-4 gap-x-8'>
              <NavbarItem text='Dashboard' link='/' />
              <NavbarItem text='Users' link='/users' />
            </nav>
            <footer>
              <a
                href='/sign-up'
                className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                Sign up
              </a>
              <p className='mt-6 text-center text-base font-medium text-gray-500'>
                Existing user? {'  '}
                <a
                  href='/sign-in'
                  className='text-indigo-600 hover:text-indigo-500'>
                  Sign in
                </a>
              </p>
            </footer>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default MobileNavbar;
