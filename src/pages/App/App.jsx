import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from "../HomePage/HomePage";
import Navbar from '../../components/Navbar/Navbar';
import TopOfPage from "../../components/TopOfPage/TopOfPage";
import ProjectPage from "../ProjectPage/ProjectPage"
import './App.css';
import ResumePage from '../ResumePage/ResumePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopOfPage/>

      <Switch>
        <Route path="/projectpage">
          <ProjectPage/>
        </Route>
        <Route path="/resume">
          <ResumePage/>
        </Route>

        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
