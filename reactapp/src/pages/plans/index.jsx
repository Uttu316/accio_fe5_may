import Header from "../../components/header";
import styles from "./plans.module.css";
import plansData from "../../data/plansData";
import PlanCard from "../../components/planCard";
import Page from "../../components/pageWrapper";

const Plans = () => {
  return (
    <Page className={styles.plansPage}>
      <h2 className={styles.heading}>Recommended Plans for You</h2>
      <div className={styles.plansContainer}>
        {plansData.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </Page>
  );
};

export default Plans;
