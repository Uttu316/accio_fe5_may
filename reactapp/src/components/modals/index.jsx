import styles from "./modal.module.css";

const Modal = ({ heading, children, onClose }) => {
  const onClickClose = () => {
    onClose();
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <button onClick={onClickClose}>Close</button>
        <h2>{heading}</h2>
        <hr />
        {children}
      </div>
    </div>
  );
};
export default Modal;
