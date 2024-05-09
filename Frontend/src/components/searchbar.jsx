import { useState } from "react"
import "./searchbar.css"
function searchBar(){
    const[inputValue, setInputValue]= useState("")

    function inputChange(e){
        setInputValue(e.target.value)
    }
    return(
        <div className="searchbar">
            <img src="/search.png" alt="search" />
            <input type="text" onChange={inputChange} value={inputValue} placeholder="Search Doctor, Symptoms, Specialist"/>
        </div>
    )
}
export default searchBar;