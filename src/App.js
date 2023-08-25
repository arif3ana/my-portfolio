import Navbar from "./components/navbar";
import FirstPage from "./components/FirstPage";
import About from "./components/About";
import PagePlus from "./components/PagePlus";
import Projects from "./components/Projects";
import PageReview from "./components/PageReview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { reviewer } from "./utils/projectsData";
import ReactGA from "react-ga";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/navbar.css";
import "./style/firstPage.css";
import "./style/about.css";
import "./style/pagePlus.css";
import "./style/projects.css";
import "./style/pageReview.css";
import "./style/contact.css";
import "./style/footer.css";

function App() {
  // integration google analytic
  const trackingId = "G-5QB4CC83T1";
  ReactGA.initialize(trackingId);
  useEffect(() => ReactGA.pageview("/my-portfolio"));

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
        <FirstPage iconsClick={handleIconClick} />
      </section>
      <main>
        <article id='about'>
          <About />
          <PagePlus />
        </article>
        <article id='Projects'>
          <Projects />
          {reviewer.map((review) => {
            if (!review.name || !review.content) {
              return null;
            }
            return (
              <PageReview
                name={review.name}
                position={review.position}
                content={review.content}
                image={review.image}
              />
            );
          })}
        </article>
        <article id='Contact'>
          <Contact emailClick={handleEmailClick} waClick={handleWaClick} />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
