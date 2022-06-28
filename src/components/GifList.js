import React from "react";

function GifList({gif}){
    return (
        <div>
            <ul>
        {   gif.map((data , index)=> {
                if(index<3){
                   return <li key={index} >
                          <img src={data.images.original.url} alt="gif"></img> 
                          </li>
                }
            })
        }
            </ul>
        </div>
    )

}
export default GifList;