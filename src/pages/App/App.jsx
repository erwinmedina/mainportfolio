import HomePage from "../HomePage/HomePage";
import Navbar from '../../components/Navbar/Navbar';
import TopOfPage from "../../components/TopOfPage/TopOfPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopOfPage/>
      <HomePage/>
    </div>
  );
}

export default App;
