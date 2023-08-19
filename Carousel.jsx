import React from "react";
import  ReactDOM  from "react-dom";
import './index.css';
import {Heading,Search,footer} from './App';
import Card from "./App";
import sData from "./Sdata";



const Container={
display: "flex",
// position:"relative",
justifyContent:" center",
flexWrap:"wrap"
};

const parastyle={color:"darkcyan"};
const arrow={color:"red"};

function ncard(value)
{
  return(
    <Card
  imgsrc={value.imgsrc}
  title={value.title}
  sname={value.sname}
  link={value.link}
  />
  )
}

ReactDOM.render(
<>

   <div >  {Heading()}</div>
  <div>  {Search()}</div>
  <div className="Para">
  <i class="bi bi-arrow-right-circle-fill" style={arrow} ></i><p style={parastyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
  <div style={Container}> 
  
  {sData.map(ncard)}
  
  </div>
  <div>{footer()}</div>
</>
,document.getElementById('root')
    
);





