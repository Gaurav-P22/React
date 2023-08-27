import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Name,{Name1,f1,f2} from './App';




//this is list function

ReactDOM.render(
    <>
        <ol>
            <li> First Name</li>
            <li>{Name}</li>
            <li>{Name1}</li>
            <li>{f1()}</li>
            <li>{f2}</li>
        </ol>
    </>
    ,document.getElementById('root')
);
