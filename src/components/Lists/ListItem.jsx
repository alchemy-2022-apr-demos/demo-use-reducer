import { FormButton } from '../Forms/FormControls.jsx';
import styles from './ListItem.css';

export default function ListItem({ item, onBuy, onRemove }) {
  const { bought, qty, description } = item;

  return (
    <li className={styles.ListItem}>
      {bought ? (
        <span className={styles.Bought}>✔️</span>
      ) : (
        <FormButton onClick={() => onBuy(item)} icon>
          💰
        </FormButton>
      )}

      <span>
        {qty} {description}
      </span>

      <button
        className={styles.RemoveButton}
        onClick={() => onRemove(item)}
      >
        🗑
      </button>
    </li>
  );
}
