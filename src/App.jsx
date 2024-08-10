import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Reservation from "./components/Reservation";

const App = () => {
  return (
    <>
      <Navbar />;
      <Header />
      <About />
      <Portfolio />
      <Reservation />
      <Contact />
    </>
  );
};

App.propTypes = {};

export default App;
