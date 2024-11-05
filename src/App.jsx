import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Discord from "./components/Discord";
import Challenges from "./components/Challenges";
import Footer from "./components/Footer";
import Platforms from "./components/Platforms";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Challenges />
      <Features />
      <Platforms />
      <Testimonials />
      <Discord />
      <Footer />
    </>
  );
};

export default App;
