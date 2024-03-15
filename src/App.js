import Home from './components/Home'
import './App.css';
// import CgpaCalculator from './components/CgpaCalculator';
// import year1courses from './components/Courses';
// import SemesterTwo from './components/SemesterTwo';
// import SemesterThree from './components/SemesterThree';
// import SemesterFour from './components/SemesterFour';
import CalculateCgpa from './components/CalculateCgpa';
import CardBox from './components/CardBox';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <CalculateCgpa/>
      <CardBox/>
      <Footer/>
    </div>
  );
}

export default App;
