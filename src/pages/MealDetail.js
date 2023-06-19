import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

const MealDetail = () => {
    const { id } = useParams();

    const { state } = useLocation();
  
    const { strYoutube } = state;
  
    const key = strYoutube.split('=')[1];
  
  
    return (
      <div>
  
        <h1>{state.name}</h1>
        <img src={state.image} alt="" />
        <p>{state.detail}</p>
        <iframe height="500px" width="500px" src={`https://www.youtube.com/embed/${key}?rel=0`} allowFullScreen allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"></iframe>
      </div>
    
  )
}

export default MealDetail
