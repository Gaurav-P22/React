import React from "react";

const heading={
    color:'#e2602f',
    textAlign:'center',
    
    margin: '25% 25%',
    fontWeight:'Bold',
    fontFamily: "'Borel', cursive",
    fontSize:"50px"
// fontFamily: "'Josefin Slab', serif"
};

function App()
{
    let curDate=new Date();
curDate=curDate.getHours();

let msg="";
let cssStyle={ };
if(curDate>=0&&curDate<12){
msg="Good Morning";
cssStyle.color="green";}
else if(curDate>=12&&curDate<19){
msg="Good AfterNoon";
cssStyle.color="Orange";}
else{
msg="Good Night";
cssStyle.color="Black";
}

return <><div >
<h1 style={heading}>Hello Sir!<span style={cssStyle}> {`${msg}`}</span></h1></div>
</>;
}

export default App;
