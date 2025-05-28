import styles from "./modal.module.css";

const JobModal = ({ onClose, jobInfo }) => {
  const { title, description, image } = jobInfo || {};
  const onClickClose = () => {
    onClose();
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <button onClick={onClickClose}>Close</button>
        <h2>About Job</h2>
        <hr />
        <h3>{title}</h3>
        <img src={image} alt={title} height={70} width={70} />
        <p
          dangerouslySetInnerHTML={{
            __html: description
          }}
        />
      </div>
    </div>
  );
};
export default JobModal;
