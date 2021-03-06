import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import styles from './menuButton.module.css';

const MenuButton = () => (
  <Popover.Button className={styles.MenuButton}>
    <span className='sr-only'>Open menu</span>
    <MenuIcon className='h-6 w-6' aria-hidden='true' />
  </Popover.Button>
);

export default MenuButton;
