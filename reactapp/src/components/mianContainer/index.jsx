// import jobsCards from "../../data/jobCards";
import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import CardsContainer from "../cardsContainer";
import ResultHeader from "../resultHeader";

const MainContainer = () => {
  const { data, status } = useContext(HomeContext);
  const isLoading = status === "loading";
  const isDone = status === "done";
  const isError = status === "error";

  const hasData = isDone && data.cards.length !== 0;
  const noData = isDone && data.cards.length === 0;

  return (
    <div>
      <ResultHeader isLoading={isLoading} />

      {isLoading && <h2>Loading jobs for you...</h2>}
      {hasData && (
        <>
          {" "}
          <CardsContainer />
          <div id="lastCard"></div>
        </>
      )}
      {noData && <h3>No Job Available</h3>}
      {isError && <h3>Something went wrong</h3>}
    </div>
  );
};

export default MainContainer;
