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
        <form onSubmit={handleSubmitForm}> 
            <input  type="text" placeholder="Enter your search" onChange={handleInputChange} value={searchInput}></input>
            <button type="submit" >Search</button>
        </form>
        </>
    )
}

export default GifSearch;