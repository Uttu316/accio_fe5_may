import styles from "./planCard.module.css";

const PlanCard = ({ plan }) => {
  const { title, price, description, features, image } = plan;

  return (
    <div className={styles.planCard}>
      <img src={image} alt={title} className={styles.planImage} />
      <h3 className={styles.planTitle}>{title}</h3>
      <p className={styles.planPrice}>{price}</p>
      <p className={styles.planDescription}>{description}</p>
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
      <button className={styles.selectButton}>Select Plan</button>
    </div>
  );
};

export default PlanCard;
