import { Link } from 'react-router-dom';
import { useLists } from '../../state/ListsContext.jsx';
import AddForm from '../Forms/AddForm.jsx';
import styles from './Lists.css';

export function Lists() {
  const { lists, addList } = useLists();

  if (!lists) return null;

  const handleAdd = async (name) => {
    await addList({ name });
  };

  return (
    <section className={styles.Lists}>
      <h2>Lists</h2>

      <AddForm onAdd={handleAdd} placeholder="add a new list..." />

      <ul>
        {lists.map((list) => {
          return (
            <li key={list.id}>
              <Link to={`${list.id}`}>{list.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
