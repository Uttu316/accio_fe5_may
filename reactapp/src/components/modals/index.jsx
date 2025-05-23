import styles from "./modal.module.css";

const Modal = ({ onClose }) => {
  const onClickClose = () => {
    onClose();
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <button onClick={onClickClose}>Close</button>
        <h2>Modal</h2>
      </div>
    </div>
  );
};
export default Modal;
