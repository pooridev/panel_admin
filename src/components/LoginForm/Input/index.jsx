import styles from './Input.module.css';

const Input = ({ htmlFor, type, placeholder, onChange }) => {
  let inputStyles = [styles.Input];

  if (type === 'password') {
    inputStyles.unshift('rounded-b-md');
  } else {
    inputStyles.unshift('rounded-t-md');
  }

  return (
    <div>
      <label htmlFor={htmlFor} className='sr-only'>
        {placeholder}
      </label>
      <input
        onChange={e => onChange(e.target.value)}
        id={htmlFor}
        type={type}
        className={inputStyles.join(' ')}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
