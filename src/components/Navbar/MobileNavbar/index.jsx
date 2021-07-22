import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Action from '../Action';
import NavbarItem from '../NavbarItem';
import Logo from './../../Logo/index';
import styles from './MobileNavbar.module.css';

const MobileNavbar = ({ open }) => (
  <Transition
    show={open}
    as={Fragment}
    enter='duration-200 ease-out'
    enterFrom='opacity-0 scale-95'
    enterTo='opacity-100 scale-100'
    leave='duration-100 ease-in'
    leaveFrom='opacity-100 scale-100'
    leaveTo='opacity-0 scale-95'>
    <Popover.Panel focus static className={styles.PopoverPanel}>
      <div className={styles.Menu}>
        <div className='pt-5 pb-2 px-5'>
          <Logo />
        </div>
        <div className='py-2 px-5 space-y-6'>
          <nav className='grid grid-cols-1 gap-y-4 gap-x-8'>
            <NavbarItem text='Dashboard' link='/' />
            <NavbarItem text='Users' link='/users' />
          </nav>
          <footer className={styles.Footer}>
            <Action type='SIGN-UP' isMobile />
            <p>
              Existing user? {'  '}
              <Action type='SIGN-IN' isMobile />
            </p>
          </footer>
        </div>
      </div>
    </Popover.Panel>
  </Transition>
);

export default MobileNavbar;
