import Navbar from "./components/navbar";
import FirstPage from "./components/FirstPage";
import "bootstrap/dist/css/bootstrap.css";
import "./style/navbar.css";
import "./style/firstPage.css";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <FirstPage />
      </section>
    </>
  );
}

export default App;
