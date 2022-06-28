import React, { useEffect, useState } from "react";
import GifList from "./GifList"
import GifSearch from "./GifSearch";

function GifListContainer(){
    const [dataResp , setDataResp] = useState([])
    const [querrySearch, setQuerrySearch] = useState("")


    function handleSubmit(val){
        setQuerrySearch(val)
    }
    
        useEffect(()=>
        {
            fetch(`https://api.giphy.com/v1/gifs/search?q=${querrySearch}&api_key=bsTvqEYsgvtswyfFYI0SGlTwkzVbAJbx`)
                .then((resp)=>resp.json())
                .then((dates)=> setDataResp(dates.data))
        },[querrySearch])

    
       
  return (
        <div>
            <GifSearch handleSubmit={handleSubmit} />
            <GifList gif={dataResp} />           

        </div>
  )
}

export default GifListContainer;