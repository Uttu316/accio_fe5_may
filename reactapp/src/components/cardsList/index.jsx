import JobCard from "../jobCard";

const CardsList = ({ data }) => {
  return (
    <div className="cardsList">
      {data.map((item) => (
        <JobCard item={item} key={item.id} />
      ))}
    </div>
  );
};
export default CardsList;
