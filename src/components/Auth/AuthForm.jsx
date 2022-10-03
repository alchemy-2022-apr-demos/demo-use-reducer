import { Link } from 'react-router-dom';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import { useForm } from '../Forms/useForm.js';
import styles from './AuthForm.css';

const signin = {
  prompt: 'Sign into your account',
  button: 'Sign In',
  switch: {
    prompt: 'Need to create an account?',
    link: 'signup',
  },
};

const signup = {
  prompt: 'Create an account',
  button: 'Sign Up',
  switch: {
    prompt: 'Already have an account?',
    link: '../',
  },
};

const modes = { signin, signup };

export default function AuthForm({ mode = 'signin' }) {
  const [credentials, handleChange] = useForm({
    email: '',
    password: '',
  });

  const type = modes[mode];

  return (
    <form className={styles.AuthForm}>
      <h2>{type.prompt}</h2>

      <InputControl
        label="Email"
        name="email"
        type="email"
        required
        value={credentials.email}
        onChange={handleChange}
      />

      <InputControl
        label="Password"
        name="password"
        type="password"
        required
        value={credentials.password}
        onChange={handleChange}
      />

      <FormButton>{type.button}</FormButton>

      <nav>
        <Link to={type.switch.link}>{type.switch.prompt}</Link>
      </nav>
    </form>
  );
}
