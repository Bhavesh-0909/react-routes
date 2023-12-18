import React from 'react'
import { useNavigate } from 'react-router-dom';

function Support() {

    const navigate = useNavigate();

    function Handler(page){
        navigate(page);
    }

  return (<div>

    <div>Support</div>
    <button onClick={()=>Handler("/")}>HomePage</button>
    <button onClick={()=>Handler(-1)}>Prev</button>
  </div>
  )
}

export default Support