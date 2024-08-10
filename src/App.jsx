import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <Navbar />;
      <Header />
      <About />
      <Portfolio />
    </>
  );
};

App.propTypes = {};

export default App;
