
import { useState } from "react";
import "./tic.css";
import x_icon from  "./o image.jpg" ;
import o_icon from "./x tIC.jpg";
let e="";
let data=["","","","","","","","",""]


const TicTac=() =>{
let [count , setCount]= useState(0);
let[lock,setLock]= useState(false);

const toggle =(w,num)=>{
    if(lock){
        return 0;
    }
    if (count %2===0)
    {
      e.target.innerHTML = `{x_icon}`;
      data[num]="X";
      setCount(++count);
    }
    else{
        e.target.innerHTML = `{o_icon}`;
      data[num]="o";
      setCount(++count);
    }
}

    return (
        <div  className="container">
            <h1 className="header" style={{color:"brown"}}>Tic tac game in</h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="boxes"></div>
                </div>
                <div className="row2">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className="row3">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
            </div>
            <button className="reset" >Reset</button>
        </div>
    )
}

export default TicTac;