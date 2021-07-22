const NavbarItem = ({ link, text }) => (
  <a
    href={link}
    className='text-base font-medium text-gray-500 hover:text-gray-900'>
    {text}
  </a>
);

export default NavbarItem;
