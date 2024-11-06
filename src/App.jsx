import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Discord from "./components/Discord";
import Challenges from "./components/Challenges";
import Footer from "./components/Footer";
import Platforms from "./components/Platforms";
import FundedTraders from "./components/FundedTraders";

const App = () => {
  return (
    <main className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FundedTraders />
      <Challenges />
      <Features />
      <Platforms />
      <Testimonials />
      <Discord />
      <Footer />
    </main>
  );
};

export default App;
