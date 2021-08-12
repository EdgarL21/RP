// import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Selfie from "./components/Selfie";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Selfie />
        <div>
          <Switch>
            <Route path="/">
              <About />
            </Route>
            <Route path="/Portfolio">
              {/* <About></About> */}
            </Route>
            <Route path="/Contact">
              {/* <About></About> */}
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
