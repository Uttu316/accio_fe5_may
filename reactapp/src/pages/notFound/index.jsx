import { useNavigate } from "react-router";
import styles from "./notFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.heading}>Page Not Found</h1>
      <button className={styles.homeButton} onClick={gotoHome}>
        Go to Home
      </button>
    </div>
  );
};
export default NotFound;
