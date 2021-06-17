
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breeds from './containers/Breeds';
import Home from './containers/Home';



const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/breeds">Breeds</Link>
                </li>
              </ul>
            </div>
          </div>


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/breeds">
              <Breeds />
            </Route>
          </Switch>
        </div>

      </Router>
    </>
  );
}


export default App;
