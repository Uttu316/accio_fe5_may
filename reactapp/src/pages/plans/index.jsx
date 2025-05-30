import Header from "../../components/header";
import styles from "./plans.module.css";
import plansData from "../../data/plansData";
import PlanCard from "../../components/planCard";

const Plans = () => {
  return (
    <div className={styles.plansPage}>
      <Header />
      <h2 className={styles.heading}>Recommended Plans for You</h2>
      <div className={styles.plansContainer}>
        {plansData.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
