import styles from "./inputItem.module.css";
const InputItem = ({
  label,
  id,
  type,
  value,
  max,
  min,
  minLength,
  maxLength,
  placeholder,
  accept,
  required,
  onChange
}) => {
  return (
    <div className={styles.inputItem}>
      <label htmlFor={id}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={id}
        required={required}
        type={type}
        max={max}
        min={min}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        accept={accept}
      />
    </div>
  );
};
export default InputItem;
