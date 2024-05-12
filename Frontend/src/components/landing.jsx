import React from 'react'
import Navbar from "../components/Navbar";
import Utils from "../components/utils";
import Carousel from "../components/Carousel";
import SearchBar from "../components/searchbar";
import Category from "../components/Category";


function landing() {
  return (
    <div>
        <Navbar></Navbar>
       <SearchBar></SearchBar>
       <Utils></Utils>
       <Carousel></Carousel>
       <Category></Category>
    </div>
  )
}

export default landing