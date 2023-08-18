import React from "react";

function Add(a,b)
{
    let sum=a+b;
    return sum;
}
function Sub(a,b)
{
    let res=a-b;
    return res;
}
function Mul(a,b)
{
    let res=a*b;
    return res;
}
function Div(a,b)
{
    let res=a/b;
    res=res.toFixed(2);
    return res;
}

export default Add;
export {Sub,Mul,Div};
