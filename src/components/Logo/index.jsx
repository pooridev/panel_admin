import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className={styles.Logo}>
    <Link to='/'>PF</Link>
  </div>
);

export default Logo;
