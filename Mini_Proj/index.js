import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// const name='gaurav';
// const img='https://picsum.photos/200/300';
// const img2='https://picsum.photos/250/300';
// const img3='https://picsum.photos/200/300';
// const img4='https://picsum.photos/201/300';

// const heading={
//     color: '#fa9191',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     textTransform: 'capitalize',
//     textShadow: '0px 1px 2px #ffe9c5',
//     fontFamily: "'Josefin Slab', serif",
//     margin: "50px"
// };
const heading={
    color:'#e2602f',
    textAlign:'center',
    
    margin: '25% 25%',
    fontWeight:'Bold',
    fontFamily: "'Borel', cursive",
    fontSize:"50px"
// fontFamily: "'Josefin Slab', serif"
};
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



ReactDOM.render(<>
    {/* <h1 contentEditable='true' className='heading' style={heading}>Hi {name}</h1>
    <div className='img_div'>
    <img src={img} alt='Error in the picture'/>
    <img src={img2} alt='Error in the picture'/>
    <img src={img3} alt='Error in the picture'/>
    <img src={img4} alt='Error in the picture'/>
    </div> */}
    <div >
    <h1 style={heading}>Hello Sir!<span style={cssStyle}> {`${msg}`}</span></h1></div>
    </>
    ,document.getElementById('root')
);
