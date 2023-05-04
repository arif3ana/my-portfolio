import Navbar from "./components/navbar";
import FirstPage from "./components/FirstPage";
import About from "./components/About";
import PagePlus from "./components/PagePlus";
import Projects from "./components/Projects";
import PageReview from "./components/PageReview";
import "bootstrap/dist/css/bootstrap.css";
import "./style/navbar.css";
import "./style/firstPage.css";
import "./style/about.css";
import "./style/pagePlus.css";
import "./style/projects.css";
import "./style/pageReview.css";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <FirstPage />
      </section>
      <main>
        <article id='about'>
          <About />
          <PagePlus />
        </article>
        <article id='projects'>
          <Projects />
          <PageReview />
        </article>
      </main>
    </>
  );
}

export default App;
