import styles from './NavbarItem.module.css';
import { Link } from 'react-router-dom';

const NavbarItem = ({ link, text }) => (
  <Link to={link} className={styles.NavbarItem}>
    {text}
  </Link>
);

export default NavbarItem;
