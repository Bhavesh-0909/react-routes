import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

    const navigate = useNavigate();

    function Handler(page){
        navigate(page);
    }
        
  return (
    <div>
    <div>About</div>
    <button onClick={()=>Handler("/")}>HomePage</button>
    <button onClick={()=>Handler(-1)}>Prev</button>
    </div>
  )
}

export default About