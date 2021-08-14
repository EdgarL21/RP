// import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Selfie from "./components/Selfie";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
// import Repo from "../../data/repos.json";
// import Repos from "./data/repos.json";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div>
          <Switch>
            <Route exact path="/">
              <Selfie />
              <About />
            </Route>

            <Route exact path="/portfolio">
              <Portfolio />
            </Route>

            <Route exact path="/Contact">
              {/* <About></About> */}
            </Route>

            <Route exact path="*" redirect="/" />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
