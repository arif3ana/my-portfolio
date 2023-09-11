import Navbar from "./components/navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ReactGA from "react-ga4";
import { reviewer } from "./utils/projectsData";
import "bootstrap/dist/css/bootstrap.css";
import "./style/navbar.css";
import "./style/homePage.css";
import "./style/about.css";
import "./style/service.css";
import "./style/projects.css";
import "./style/review.css";
import "./style/contact.css";
import "./style/footer.css";

function App() {
  // integration google analytic
  ReactGA.initialize("G-5QB4CC83T1");
  const handleIconClick = () => {
    ReactGA.event({
      category: "Social media",
      action: "Social media Link Clicked",
      label: "icons Sosial media",
    });
  };

  const handleEmailClick = () => {
    ReactGA.event({
      category: "Email contact",
      action: "Email contact Link Clicked",
      label: "Email Clicked",
    });
  };

  const handleWaClick = () => {
    ReactGA.event({
      category: "Whatsaap contact",
      action: "Whatsaap contact Link Clicked",
      label: "Whatsaap Clicked",
    });
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <HomePage iconsClick={handleIconClick} />
      </section>
      <main>
        <article id='about'>
          <About />
        </article>
        <article id='projects'>
          <Projects />
        </article>
        <article id='service'>
          <Service />
          {reviewer.map((review) => {
            if (!review.name || !review.content) {
              return null;
            }
            return (
              <Review
                name={review.name}
                position={review.position}
                content={review.content}
                image={review.image}
              />
            );
          })}
        </article>
        <article id='contact'>
          <Contact emailClick={handleEmailClick} waClick={handleWaClick} />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
