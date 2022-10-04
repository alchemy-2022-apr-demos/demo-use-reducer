import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, useUser } from '../../state/UserContext.jsx';
import styles from './User.css';

export default function User() {
  const user = useUser();
  const { signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const className = classNames(styles.User, {
    [styles.Open]: isOpen,
  });

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={className}>
      {user?.email}
      <button onClick={handleClick}>v</button>
      <div className={styles.UserMenu}>
        <Link to="user" onClick={signOut}>
          Sign Out
        </Link>
      </div>
    </div>
  );
}
