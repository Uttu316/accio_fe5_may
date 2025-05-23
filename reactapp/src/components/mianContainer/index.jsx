import jobsCards from "../../data/jobCards";
import CardsContainer from "../cardsContainer";
import ResultHeader from "../resultHeader";

const MainContainer = () => {
  let pageData = {
    start: 1,
    last: 30,
    total: 128
  };
  return (
    <div>
      <ResultHeader pageData={pageData} />
      <CardsContainer data={jobsCards} />
    </div>
  );
};

export default MainContainer;
