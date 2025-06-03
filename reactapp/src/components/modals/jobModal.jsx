import Modal from ".";
import styles from "./modal.module.css";

const JobModal = ({ onClose, jobInfo }) => {
  const { title, description, image } = jobInfo || {};

  return (
    <Modal heading={"About Job"} onClose={onClose}>
      <h3>{title}</h3>
      <img src={image} alt={title} height={70} width={70} />
      <p
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />
    </Modal>
  );
};
export default JobModal;
