import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
};

App.propTypes = {};

export default App;
