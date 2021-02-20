import React from 'react';
import 'antd/dist/antd.css';
import RocketPage from './Page/RocketPage'
import Home from './Page/HomePage'
import LaunchPage from './Page/LaunchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route path="/Home">
        <Home />
      </Route>

      <Route path="/Rocket">
        <RocketPage />
      </Route>

      <Route path="/Launch">
        <LaunchPage />
      </Route>

    </Switch>
    </Router>
    </>
  );
}

export default App;