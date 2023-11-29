import Hero from "./Hero";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import reviews from "./data";
import About from "./About";
import Subscriptions from "./Subscriptions";
import Footer from "./Footer";
import Features from "./Features";

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
