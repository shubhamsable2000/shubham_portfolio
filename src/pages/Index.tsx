import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <Hero />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Index;