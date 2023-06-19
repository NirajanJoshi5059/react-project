import React from 'react'
import { useLocation, useParams } from 'react-router'

const PersonDetail = () => {
    const { id }= useParams();
    const {state}= useLocation();
    console.log(id);
    console.log(state);

  return (
    <div>
       <img className="h-[200px]" src={state.profile} alt="Loading..."/>
                <h1>{state.name}</h1>
                <p>{state.detail}</p>
      
    </div>
     
  )
}

export default PersonDetail
