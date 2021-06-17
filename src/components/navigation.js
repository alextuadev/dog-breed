import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Router>
        <div className="row">
          <div className="col-12">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
              </li>
              <li className="nav-em">
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
            <About />
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default Navigation;
