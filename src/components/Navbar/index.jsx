import { Popover } from '@headlessui/react';
import Logo from '../Logo';
import MenuButton from './../MenuButton';
import NavbarItem from './NavbarItem';
import MobileMenu from './MobileMenu';

import styles from './Navbar.module.css';
import Action from './Action';

const Navbar = () => (
  <Popover className='relative bg-white'>
    {({ open }) => (
      <>
        <header className={styles.Header}>
          <div className={styles.Navbar}>
            <Logo />
            <div className='-mr-2 -my-2 md:hidden'>
              <MenuButton />
            </div>
            <nav className={styles.Items}>
              <NavbarItem text='Dashboard' link='/' />
              <NavbarItem text='Users' link='/users' />
            </nav>
            <div className={styles.Actions}>
              <Action />
            </div>
          </div>
        </header>
        <MobileMenu open={open} />
      </>
    )}
  </Popover>
);

export default Navbar;
