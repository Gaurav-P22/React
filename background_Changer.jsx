import React, { useState } from "react";
import "./index.css";
// const st={backgroundColor:"red"};
const purple="#E543CC";
const App=()=>{

    const [bg,setbg]=useState(purple);
    const [name,setName]=useState("Click Me");
    const chgBK=()=>
    {
        // st={backgroundColor:"purple"};
        let color="#E3BE24";
        setbg(color);
        setName("Hi Press Again");
    };
    const bgBack=()=>
    {
        setbg(purple);
        setName("ClickMe");
    };
return(
    <>
    <div style={{backgroundColor:bg}}>
        <button onClick={chgBK} onDoubleClick={bgBack}>{name}</button>
        </div>
    </>
);
};

export default App;
