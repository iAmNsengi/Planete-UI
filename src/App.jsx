import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />;
      <Header />
      <About />
    </>
  );
};

App.propTypes = {};

export default App;
