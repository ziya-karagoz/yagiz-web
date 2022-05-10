import { useState, useEffect } from "react";
import { Navigation } from "./components/pages/navigation";
import { Header } from "./components/pages/header";
import { Features } from "./components/pages/features";
import { About } from "./components/pages/about";
import { Services } from "./components/pages/services";
import { Blog } from "./components/pages/blog";
import { Contact } from "./components/pages/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  document.title = "Yağız Bilişim";
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  // Deneme
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Blog data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
