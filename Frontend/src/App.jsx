
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import Doctor from "./components/utils/doctor";
import Clinic from "./components/utils/Clinic";
import Bloodbank from "./components/utils/bloodbank";
function App() {


  return (
    <>
    <Router>
      <Routes> 
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/Doctor" element={<Doctor/>}></Route>
      <Route path="/Clinic" element={<Clinic/>}></Route>
      <Route path="/Bloodbank" element={<Bloodbank/>}></Route>
       
      </Routes>
    </Router>
    </>
  )
}

export default App
