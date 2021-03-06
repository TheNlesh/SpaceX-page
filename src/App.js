import './App.css';
import logo from './spacex.svg'
import { Layout, Row } from 'antd';
import Navbar from './components/Navbar'
import Rockets from './views/Rockets'
import RocketLaunch from './views/RocketLaunch'
import ErrorPage from "./views/errorPage"
import DetailedRocket from "./views/RocketLaunchDetail"
import HomePage from './views/HomePage'
import RocketsDetail from './views/RocketsDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const { Header, Content, Footer } = Layout;

function App() {
  return (
  <Router>
    <Layout>
      <Header>
        <img className='App-logo' src={logo} />
        <Navbar />
      </Header> <br/>
      <Content>
        <Switch>
          <Route exact path="/Launches">
            <RocketLaunch />
          </Route>
          <Route exact path="/Rockets">
            <Rockets />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Launches/:flightId">
            <DetailedRocket />
          </Route>
          <Route path="/Detail/:rocket_id">
            <RocketsDetail />
          </Route>
          <Route path="*">
            <ErrorPage status="404" title="404"/>
          </Route>
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2021 Developed by Pitchayapol, Weerapat, and Possathon
      </Footer>
    </Layout>
    
  </Router>
  );
}

export default App;
