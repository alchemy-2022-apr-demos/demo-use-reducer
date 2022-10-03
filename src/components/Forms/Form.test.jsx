import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import {
  CheckboxControl,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl,
} from './FormControls.jsx';
import { useForm } from './useForm.js';

function Test({ onSubmit, formData }) {
  const [data, handleChange] = useForm(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        name="user"
        label="User"
        value={data.user || ''}
        onChange={handleChange}
      />

      <SelectControl
        label="Animal"
        name="animal"
        value={data.animal}
        onChange={handleChange}
      >
        <option value="1">Cat</option>
        <option value="2">Dog</option>
        <option value="3">Bird</option>
      </SelectControl>

      <TextAreaControl
        label="Bio"
        name="bio"
        value={data.bio || ''}
        onChange={handleChange}
      />

      <CheckboxControl
        label="Yes"
        name="accepted"
        checked={data.accepted || false}
        onChange={handleChange}
      />

      <FormButton>Submit</FormButton>
    </form>
  );
}

test('Control changes update data', async () => {
  const user = userEvent.setup();

  // use a jest mock function to track what onSubmit returned
  const handleSubmit = jest.fn();

  render(<Test onSubmit={handleSubmit} />);

  // input text
  const input = screen.getByLabelText('User');
  await user.type(input, 'username');

  // select
  const selectControl = screen.getByLabelText('Animal');
  await user.selectOptions(selectControl, '2');

  // input text
  const textArea = screen.getByLabelText('Bio');
  await user.type(textArea, 'my bio');

  // checkbox
  const checkbox = screen.getByLabelText('Yes');
  await user.click(checkbox);

  // click button
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith({
    user: 'username',
    animal: '2',
    bio: 'my bio',
    accepted: true,
  });
});

test('Form uses initial data and updates partial data', async () => {
  const user = userEvent.setup();

  // use a jest mock function to track what onSubmit returned
  const handleSubmit = jest.fn();

  render(
    <Test
      onSubmit={handleSubmit}
      formData={{
        user: 'username',
        animal: '2',
        bio: 'my bio',
        accepted: true,
      }}
    />
  );

  // input text
  const input = screen.getByLabelText('User');
  expect(input.value).toBe('username');
  await user.clear(input);
  await user.type(input, 'updated');

  // select
  const selectControl = screen.getByLabelText('Animal');
  expect(selectControl.value).toBe('2');

  // input text
  const textArea = screen.getByLabelText('Bio');
  expect(textArea.value).toBe('my bio');
  await user.clear(textArea);
  await user.type(textArea, 'updated bio');

  // checkbox
  const checkbox = screen.getByLabelText('Yes');
  expect(checkbox.checked).toBe(true);

  // click button
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith({
    user: 'updated',
    animal: '2',
    bio: 'updated bio',
    accepted: true,
  });
});

test('Form updates data when initialData changes', async () => {
  const user = userEvent.setup();

  // use a jest mock function to track what onSubmit returned
  const handleSubmit = jest.fn();

  const { rerender } = render(
    <Test
      onSubmit={handleSubmit}
      formData={{
        accepted: true,
        animal: '2',
        bio: 'my bio',
        user: 'username',
      }}
    />
  );

  // input text
  const input = screen.getByLabelText('User');
  await user.clear(input);
  await user.type(input, 'abc');

  const changedData = {
    accepted: false,
    animal: '3',
    bio: 'updated bio',
    user: 'updated',
  };

  rerender(<Test onSubmit={handleSubmit} formData={changedData} />);

  // click button
  await user.click(screen.getByRole('button'));

  expect(handleSubmit).toHaveBeenCalledWith(changedData);
});
