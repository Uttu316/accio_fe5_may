import { useContext } from "react";
import JobCard from "../jobCard";
import { HomeContext } from "../../contexts/HomeContext";

const CardsList = () => {
  const { data } = useContext(HomeContext);
  const { cards } = data;
  return (
    <div className="cardsList">
      {cards.map((item) => (
        <JobCard item={item} key={item.id} />
      ))}
    </div>
  );
};
export default CardsList;
