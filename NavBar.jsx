








import React from "react";
import  ReactDOM  from "react-dom";
import Caraousel,{Nav,footer,Cards} from "./app2";

// // const img={flexWrap:wrap,
// };

ReactDOM.render(
  <>
  {Nav()}
    <Caraousel></Caraousel>
    <div >{Cards()}</div>
    <div>{Cards()}</div>
    <div>{footer()}</div>
    
      </>
  ,document.getElementById("root")
);

