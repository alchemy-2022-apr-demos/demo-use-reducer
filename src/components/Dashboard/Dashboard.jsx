import { useUser } from '../../state/UserContext.jsx';
import styles from './Dashboard.css';

export default function Dashboard() {
  const user = useUser();
  return (
    <div className={styles.Dashboard}>
      Dashboard
      <pre>{JSON.stringify(user, true, 2)}</pre>
    </div>
  );
}
