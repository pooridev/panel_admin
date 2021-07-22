import styles from './NavbarItem.module.css';

const NavbarItem = ({ link, text }) => (
  <a href={link} className={styles.NavbarItem}>
    {text}
  </a>
);

export default NavbarItem;
