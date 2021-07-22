import { Fragment } from 'react';
import { Popover } from '@headlessui/react';
import Logo from '../Logo';
import MenuButton from './../MenuButton/index';
import NavbarItem from './NavbarItem';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  return (
    <Popover className='relative bg-white'>
      {({ open }) => (
        <>
          <header className='max-w-screen-2xl mx-auto px-4 sm:px-6'>
            <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10'>
              <Logo />
              <div className='-mr-2 -my-2 md:hidden'>
                <MenuButton />
              </div>
              <nav className='hidden md:flex items-center justify-center gap-5 md:flex-1 lg:w-0'>
                <NavbarItem text='Dashboard' link='/' />
                <NavbarItem text='Users' link='/users' />
              </nav>
              <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
                <a
                  href='/sign-in'
                  className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                  Sign in
                </a>
                <a
                  href='/sign-up'
                  className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                  Sign up
                </a>
              </div>
            </div>
          </header>
          <MobileNavbar open={open} />
        </>
      )}
    </Popover>
  );
};

export default Navbar;
