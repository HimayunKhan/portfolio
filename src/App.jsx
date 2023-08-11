import About from "./components/About";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </>
  );
}

export default App;
