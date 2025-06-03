import { useCallback, useEffect, useState } from "react";
import Counter from "../../components/counter";
import Header from "../../components/header";
import MainContainer from "../../components/mianContainer";
import Page from "../../components/pageWrapper";
import SaleBanner from "../../components/sale";
import HomeProvider from "../../contexts/HomeContext";

const Home = () => {
  return (
    <Page>
      <SaleBanner />
      <HomeProvider>
        <MainContainer />
      </HomeProvider>

      <Counter />
    </Page>
  );
};

export default Home;
