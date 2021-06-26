import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import UseEffect from "./Components/UseEffect/UseEffect";
import UseState from "./Components/UseState/UseState";

function App() {
  return (
    <Router>
            <Header />
      <Switch>
        <Route exact path="/">
          <UseState />
        </Route>
        <Route path="/useState">
          <UseState />
        </Route>
        <Route path="/useEffect">
          <UseEffect />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
