import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import PredictForm from './predict';
import SecondPredict from './predict2';
import RetrainModel from './retrain';
import Visual from './visual';

function App() {
  return (
   
      <Router>
          <Navbar />
        <div className=" bg-[#e1eaed]">
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/predict" element={<PredictForm/>} /> */}
            <Route path="/predict" element={<SecondPredict/>} />
            <Route path= "/retrain" element={<RetrainModel/>} />
            <Route path= "/findings" element={<Visual/>} />

          </Routes>
        </div>
      </Router>
 
  );
}

export default App;
