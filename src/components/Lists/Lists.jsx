import { Link } from 'react-router-dom';
import { useLists } from '../../state/ListsContext.jsx';
import { FormButton, InputControl } from '../Forms/FormControls.jsx';
import { useForm } from '../Forms/useForm.js';
import styles from './Lists.css';

function AddForm({ onAdd }) {
  const [data, handleChange] = useForm({ name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(data);
  };

  return (
    <form className={styles.AddForm} onSubmit={handleSubmit}>
      <InputControl
        label="Name"
        name="name"
        required
        value={data.name}
        onChange={handleChange}
      />
      <FormButton>Add</FormButton>
    </form>
  );
}

export function Lists() {
  const { lists, addList } = useLists();

  if (!lists) return null;

  const handleAdd = async (list) => {
    await addList(list);
  };

  return (
    <section className={styles.Lists}>
      <h2>Lists</h2>
      <AddForm onAdd={handleAdd} />
      <ul>
        {lists.map((list) => {
          return (
            <li key={list.id}>
              <Link to={`${list.id}`}>
                {list.name} ({list.id})
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
