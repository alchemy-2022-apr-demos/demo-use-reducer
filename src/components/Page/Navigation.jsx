import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="">Dashboard</NavLink>
      <NavLink to="lists">Lists</NavLink>
    </nav>
  );
}
