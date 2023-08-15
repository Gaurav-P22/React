import React from "react";

const heading={
    textAlign:"center"
}

const SlotM=(props)=>{
    // let x='😊';
    // let y='😊';
    // let z='😒';

    if((props.x===props.y)&&(props.y===props.z))
    {
        return (<><center>
            <div className="slot_inner">
                <h1>{props.x} {props.y} {props.z}</h1>
                <h1>This is Matching.</h1>
                <hr/>
            </div></center>
        </>);
    }
    else{
        return (<><center>
            <div className="slot_inner">
                <h1>{props.x} {props.y} {props.z}</h1>
                <h1>This is Not Matching.</h1>
                <hr/>
            </div></center>
        </>);
    }

};

const App=()=>{
return <>
    <h1 style={heading}>🎰 Welcome to <span style={{fontWeight:"bold"}}>Slot Machine Game</span>🎰</h1>
    <SlotM x='😂' y='🤣' z='😍'/>
    <SlotM x='😉' y='😉' z='😉'/>
    <SlotM x='😂' y='🤣' z='😍'/>
    <SlotM x='😂' y='🤣' z='😍'/>
</>
};

export default App;
