import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Vision from "../components/Vision/Vision";
import Explore from "../components/Explore/Explore";
import About from "../components/About/About";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Products />
      <Vision />
      <Explore />
      <Contact />
    </div>
  );
};

export default Home;
