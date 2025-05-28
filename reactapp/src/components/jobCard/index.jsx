import styles from "./jobcard.module.css";
import { BsGeoAltFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { useState } from "react";
import JobModal from "../modals/jobModal";
import ApplyModal from "../modals/applyModal";

const JobCard = ({ item }) => {
  const {
    image,
    id,
    isWFH,
    title,
    tags,
    createdAt,
    location,
    employees,
    description
  } = item;
  const { min, max } = employees;

  const [isViewModal, setIsViewModal] = useState(false);
  const [isApplyModal, setIsApplyModal] = useState(false);

  const isTags = tags && tags.length !== 0;

  const onView = () => {
    setIsViewModal(true);
  };
  const onCloseView = () => {
    setIsViewModal(false);
  };
  const onApply = () => {
    setIsApplyModal(true);
  };

  const onCloseApply = () => {
    setIsApplyModal(false);
  };

  const date = new Date(createdAt).toDateString();
  return (
    <div className={styles.jobCard}>
      <img className={styles.img} src={image} alt={title} />
      <div className={styles.jobContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.location}>
          {!isWFH && (
            <BsGeoAltFill
              color="orange"
              size={12}
              className={styles.locationIcon}
            />
          )}
          {isWFH && (
            <IoIosHome
              color="orange"
              size={12}
              className={styles.locationIcon}
            />
          )}
          Job Available in <span className={styles.city}>{location}</span>
        </p>
        <p className={styles.founded}>
          <IoIosPeople
            className={styles.peopleIcon}
            size={18}
            color="#409bb7"
          />{" "}
          Job created at {date}
          <span></span>
          {min} - {max} Employees
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: description
          }}
          className={styles.desc}
        ></p>
        {isTags &&
          tags.map((tag, index) => (
            <span className={styles.tag} key={index}>
              {tag}
            </span>
          ))}
      </div>
      <div className={styles.jobActions}>
        <button onClick={onView} className={styles.viewBtn}>
          View <FaRegEye />
        </button>
        <div className={styles.jobSubActions}>
          <button onClick={onApply} title="Apply" className={styles.jobApply}>
            <FaEnvelopeCircleCheck />
          </button>
          <button title="Reject" className={styles.jobReject}>
            <FcCancel />
          </button>
        </div>
      </div>
      {isViewModal && <JobModal jobInfo={item} onClose={onCloseView} />}
      {isApplyModal && (
        <ApplyModal id={id} title={title} onClose={onCloseApply} />
      )}
    </div>
  );
};
export default JobCard;
