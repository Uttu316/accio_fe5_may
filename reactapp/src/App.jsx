import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";
import MainContainer from "./components/mianContainer";

const App = () => {
  return (
    <div>
      <Header />
      <MainContainer />
      <Counter />
    </div>
  );
};
export default App;
