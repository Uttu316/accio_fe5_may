import CardsList from "../cardsList";
import "./cardsContainer.css";
const CardsContainer = ({ data }) => {
  return (
    <div className="cardsContainer">
      <CardsList data={data} />
    </div>
  );
};
export default CardsContainer;
