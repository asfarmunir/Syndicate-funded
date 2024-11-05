import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Discord from "./components/Discord";
import Challenges from "./components/Challenges";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Challenges />
      <Features />
      <Testimonials />
      <Discord />
    </>
  );
};

export default App;
