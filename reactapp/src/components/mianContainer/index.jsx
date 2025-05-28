import { useCallback, useEffect, useMemo, useState } from "react";
// import jobsCards from "../../data/jobCards";
import CardsContainer from "../cardsContainer";
import ResultHeader from "../resultHeader";
import { getJobs } from "../../services/getJobsService";

const MainContainer = () => {
  const [data, setData] = useState({
    start: 0,
    last: 0,
    total: 0,
    cards: []
  });

  const [status, setStatus] = useState("loading");

  console.log("Render");

  const fetchJobs = useCallback(async () => {
    try {
      const data = await getJobs();
      setData(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, []);

  const isLoading = status === "loading";
  const isDone = status === "done";
  const isError = status === "error";

  const hasData = isDone && data.cards.length !== 0;
  const noData = isDone && data.cards.length === 0;

  return (
    <div>
      <ResultHeader isLoading={isLoading} pageData={data} />

      {isLoading && <h2>Loading jobs for you...</h2>}
      {hasData && (
        <>
          {" "}
          <CardsContainer data={data.cards} />
          <div id="lastCard"></div>
        </>
      )}
      {noData && <h3>No Job Available</h3>}
      {isError && <h3>Something went wrong</h3>}
    </div>
  );
};

export default MainContainer;
