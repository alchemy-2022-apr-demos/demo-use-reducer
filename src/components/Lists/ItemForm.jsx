import { useForm } from '../Forms/useForm.js';
import { FormButton, InputControl } from '../Forms/FormControls.jsx';
import styles from './ItemForm.css';

const initialData = {
  description: '',
  qty: '',
};

export default function ItemForm({ onAdd, ...rest }) {
  const [data, handleChange, reset] = useForm(initialData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { qty, ...obj } = data;
    if (qty) obj.qty = qty;
    await onAdd(obj);
    reset();
  };

  return (
    <form className={styles.ItemForm} onSubmit={handleSubmit}>
      <InputControl
        label="Description"
        name="description"
        required
        value={data.description}
        onChange={handleChange}
      />

      <InputControl
        label="Quantity"
        name="qty"
        type="number"
        step="1"
        value={data.qty}
        onChange={handleChange}
        {...rest}
      />

      <FormButton>Add</FormButton>
    </form>
  );
}
