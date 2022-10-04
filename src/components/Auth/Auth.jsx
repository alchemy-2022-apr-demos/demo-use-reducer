import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../state/UserContext.jsx';
import styles from './Auth.css';

export default function Auth() {
  const user = useUser();

  // TODO: handle cleaver redirect to page that got us here
  if (user) return <Navigate to="/" />;

  return (
    <main className={styles.Auth}>
      <h1>Shopping List</h1>
      <Outlet />
    </main>
  );
}
