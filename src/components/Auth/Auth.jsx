import { Outlet } from 'react-router-dom';
import styles from './Auth.css';

export default function Auth() {
  return (
    <main className={styles.Auth}>
      <h1>Shopping List</h1>
      <Outlet />
    </main>
  );
}
