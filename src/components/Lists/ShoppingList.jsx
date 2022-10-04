// import { useParams } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { useList } from '../../state/ListsContext.jsx';
import { FormButton } from '../Forms/FormControls.jsx';
import ItemForm from './ItemForm.jsx';
import styles from './ShoppingList.css';

export function ShoppingList() {
  const { id } = useParams();
  const { list, addItem, removeItem, buyItem } = useList(id);

  if (!list) return null;

  const handleAdd = async (item) => {
    await addItem(item);
  };

  const handleRemove = async ({ id, description, qty }) => {
    const message = `You are sure you want to remove ${qty} ${description}?`;
    if (confirm(message)) {
      await removeItem(id);
    }
  };

  const handleBuy = async ({ id }) => {
    await buyItem(id);
  };

  return (
    <section className={styles.ShoppingList}>
      <div>
        <Link to="..">Lists</Link> &gt; {list.name}
      </div>

      <ItemForm onAdd={handleAdd} />

      <ul>
        {list.items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onBuy={handleBuy}
            onRemove={handleRemove}
          />
        ))}
      </ul>
    </section>
  );
}

function ListItem({ item, onBuy, onRemove }) {
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
