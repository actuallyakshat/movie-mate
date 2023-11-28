import Hero from "./Home/Hero";
import Contact from "./Home/Contact";
import Testimonial from "./Home/Testimonial";
import reviews from "../data";
import About from "./Home/About";
import Subscriptions from "./Home/Subscriptions";
import Footer from "./Home/Footer";
import Features from "./Home/Features";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Subscriptions />
      <About />
      <Testimonial reviews={reviews} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
