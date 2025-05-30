import Counter from "../../components/counter";
import Header from "../../components/header";
import MainContainer from "../../components/mianContainer";
import SaleBanner from "../../components/sale";

const Home = () => {
  return (
    <div>
      <Header />
      <SaleBanner />
      <MainContainer />
      <Counter />
    </div>
  );
};

export default Home;
