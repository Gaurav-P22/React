import React, { useState } from "react";
import './index.css';

const App=()=>
{
  let newTime=new Date().toLocaleTimeString();
  const [ctime,setCTime]=useState(newTime);
  const UpdateTime=()=>{
    newTime =new Date().toLocaleTimeString();
    setCTime(newTime);
  }
return <>
  <h1>{newTime}</h1>
  <button onClick={UpdateTime}>get Time</button>
</>
};

export default App;
