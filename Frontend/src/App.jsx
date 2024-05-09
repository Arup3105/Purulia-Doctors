
import './App.css';
import Navbar from "./components/Navbar";
import Utils from "./components/utils";
import Carousel from "./components/Carousel";
import SearchBar from "./components/searchbar";
import Category from "./components/category";

function App() {


  return (
    <>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <Utils></Utils>
      <Carousel></Carousel>
      <Category></Category>
    </>
  )
}

export default App
