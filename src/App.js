// import { GlobalStyle } from "./GlobalStyles";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Selfie from "./components/Selfie";
import About from "./components/About";

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
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
