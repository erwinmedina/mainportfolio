import { Route, Routes} from 'react-router-dom';
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
      <Routes>
        <Route path="/projectpage" element={<ProjectPage/>} />
        <Route path="/aboutpage" element={<AboutPage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
