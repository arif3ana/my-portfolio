import Navbar from "./components/navbar";
import FirstPage from "./components/FirstPage";
import About from "./components/About";
import PagePlus from "./components/PagePlus";
import "bootstrap/dist/css/bootstrap.css";
import "./style/navbar.css";
import "./style/firstPage.css";
import "./style/about.css";
import "./style/pagePlus.css";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <FirstPage />
      </section>
      <article id='about'>
        <About />
        <PagePlus />
      </article>
    </>
  );
}

export default App;
