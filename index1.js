import React from "react";
import  ReactDOM  from "react-dom";
import Add,{Sub,Mul,Div} from "./App";

ReactDOM.render(<>
    <ol>
        <li>
            {Add(40,5)}
        </li>
        <li>{Sub(40,5)}</li>
        <li>{Mul(40,5)}</li>
        <li>{Div(40,3)}</li>
    </ol>

</>
    ,document.getElementById('root')
);
