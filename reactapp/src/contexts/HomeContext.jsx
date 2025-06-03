import { createContext, useCallback, useEffect, useState } from "react";
import { getJobs } from "../services/getJobsService";

export const HomeContext = createContext({
  status: "",
  data: {}
});

const HomeProvider = ({ children }) => {
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
  return (
    <HomeContext.Provider
      value={{
        data,
        status
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
