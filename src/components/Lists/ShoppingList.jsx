import { Link, useParams } from 'react-router-dom';
import { useList } from '../../state/ListsContext.jsx';
import ItemForm from './ItemForm.jsx';
import ListItem from './ListItem.jsx';
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
