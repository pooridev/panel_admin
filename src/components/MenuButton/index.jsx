import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import classes from './menuButton.module.css';

const MenuButton = () => (
  <Popover.Button className={classes.MenuButton}>
    <span className='sr-only'>Open menu</span>
    <MenuIcon className='h-6 w-6' aria-hidden='true' />
  </Popover.Button>
);

export default MenuButton;
