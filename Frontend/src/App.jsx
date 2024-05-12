
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import Doctor from "./components/doctor/doctor";
function App() {


  return (
    <>
    <Router>
      <Routes> 
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/Doctor" element={<Doctor/>}></Route>
       
      </Routes>
    </Router>
    </>
  )
}

export default App
