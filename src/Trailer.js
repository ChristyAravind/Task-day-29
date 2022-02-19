import React from "react";
import { useParams } from "react-router-dom"; 

export function Trailer({list}) {

  const {id} = useParams();

  const ani=list[id];

  console.log(id,ani)

  return (

    <div>
      <h1>Welcome to Trailer zone</h1>
      <div className="trailer">
      <iframe 
      width="100%" 
      height="900" 
      src={ani.trailer} 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      </iframe>
      </div>

      <h1>Name:{ani.name}</h1>

    </div>
  );
}
