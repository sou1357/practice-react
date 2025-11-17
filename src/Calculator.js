import { useState } from "react";  // React JS HOOK   state API   variable
import "./css/style.css"
import mystyle from "./css/mystyle.module.css"

function Calculator() {
    
    const [n1,setN1]=useState(0)
    const [n2,setN2]=useState(0)
    const css=`${mystyle.boxBorder} ${mystyle.textMargin} ${mystyle.textPadding}`
    const [result,setResult]=useState(0)

    // Virtual DOM
    function addition()
    {
        setResult(parseInt(n1)+parseInt(n2))
    }
    function substract()
    {
        setResult(parseInt(n1)-parseInt(n2))
    }
    function multiply()
    {
        setResult(parseInt(n1)*parseInt(n2))
    }
  return (
    <div className="alert alert-primary w-50">
      <div className={css}>Calculator Page</div>
      <h1 className="bg-color font-color">Calculator</h1>
      <div class="mb-3">
        <input
          type="number"
          className="form-control form-control-sm"
          placeholder="Enter a number"
          value={n1}
          onChange={
            function(event){
            setN1(event.target.value)
          }
        }
        />
      </div>
      <div class="mb-3">
        <input
          type="number"
          className="form-control form-control-sm"
          placeholder="Enter a number"
          value={n2}
           onChange={
            function(event){
            setN2(event.target.value)
          }
        }
        />
      </div>
      <div className="alert alert-danger">Result {result}</div>
      <button className="btn btn-primary me-2" onClick={addition}>+</button>
      <button className="btn btn-primary me-2" onClick={substract}>-</button>
      <button className="btn btn-primary me-2" onClick={multiply}>x</button>
    </div>
  );
}

export default Calculator
