import React, { useState } from "react";

function GifSearch({handleSubmit}){
    const [searchInput , setSearchInput]= useState("")
        function handleSubmitForm(e){
            e.preventDefault()
           handleSubmit(searchInput)
        }
        function handleInputChange(e){
            setSearchInput(e.target.value)
        }
        return(
        <>
        <form  className="d-flex" onSubmit={handleSubmitForm}> 
            <label>Enter a Search Term: </label>
            <br></br>
            <input className="me-2" type="search" placeholder="Enter your search" onChange={handleInputChange} value={searchInput}></input>
            <button variant="outline-success" type="submit" >Find Gifs</button>
        </form>
        </>
    )
}

export default GifSearch;