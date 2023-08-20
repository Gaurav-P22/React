import React, { useState } from "react";
import "./App.css";

const App=()=>
{
    const [name,setName]=useState();
    const[lastName,setLastName]=useState();

    const [onssub,setsubName]=useState();
    const [setLasName,setlName]=useState();
    const Submit=(event)=>
    {
        event.preventDefault();
        setsubName(name);
        setlName(lastName);
    };
    const InputEvent=(event)=>
    {
        setName(event.target.value);
    };

    const InputEvent2=(event)=>
    {
        setLastName(event.target.value);
    };
return <><form>
    <div>
        <h1>
        Hi {onssub} {setLasName}
        </h1>
        <input type="text" placeholder="Enter your Name"
            onChange={InputEvent}
            value={name}
        />
        <br/>
        <br/>
        <input type="text" placeholder="Enter your Last Name"
            onChange={InputEvent2}
            value={lastName}
        />

        <br/>
        <br/>
        <button onClick={Submit} >Click Here</button>
    </div>
    </form>
</>
};

export default App;
