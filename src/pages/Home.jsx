import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Vision from "../components/Vision/Vision";
import Explore from "../components/Explore/Explore";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Products />
      <Vision />
      <Explore />
      <Contact />
    </div>
  );
};

export default Home;
