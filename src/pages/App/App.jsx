import { Route, Switch} from 'react-router-dom';
import HomePage from "../HomePage/HomePage";
import Navbar from '../../components/Navbar/Navbar';
import TopOfPage from "../../components/TopOfPage/TopOfPage";
import ProjectPage from "../ProjectPage/ProjectPage"
import AboutPage from "../AboutPage/AboutPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopOfPage/>
      <Switch>
        <Route path="/projectpage">
          <ProjectPage/>
        </Route>
        <Route path="/aboutpage">
          <AboutPage/>
        </Route>

        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
