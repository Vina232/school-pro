import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Userdetail() {
    const {state} = useLocation();

    const navigate = useNavigate();
    // console.log("location---", state)
  return (
    <div>
        
        <h1>userdetail</h1>
        <h3> ID : {state.id}</h3>
         <h3> user name : {state.username}</h3>
          <h3> email : {state.email}</h3>
           <h3> address : {state.address.street}</h3>
           <button onClick={()=> navigate(-1)}>  GO BACK</button>
        </div>
  )
}

export default Userdetail