import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked" +text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success")
  }
  const handleLoClick=()=>{
    // console.log("Uppercase was clicked" +text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to Lowercase","success")

  }
  const handleclrClick=()=>{
    // console.log("Uppercase was clicked" +text);
    let newText='';
    setText(newText)
    props.showAlert("clear successfully","success")

  }

  const handleOnChange=(event)=>{
   
    setText(event.target.value);
  }

const handleCopy=()=>{
  console.log("Copy Text");
  var text=document.getElementById("myBox")
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("copy successfully","success")

}

const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extraspace Remove successfully","success")

}

const [text,setText]=useState('')

  return (
    <>
    <div className="container"  style={
            {backgroundColor:props.mode==='light'?'white':'#042743'}
          }>
        <h1 style={
            {color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
      <div className="mb-3">
       
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={
            {backgroundColor: props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#042743'}
          }
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleclrClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

    </div>

    <div className="container my-3">
      <h3 style={{color:props.mode==='dark'?'white':'#042743'}}>Your text Summary</h3>
      <p style={{color:props.mode==='dark'?'white':'#042743'}}>{text.split(" ").length} words and {text.length} characters</p>
      <p style={{color:props.mode==='dark'?'white':'#042743'}}>{0.008 * text.split(" ").length }</p>
      <h3 style={{color:props.mode==='dark'?'white':'#042743'}}>Preview</h3>
      <p style={{color:props.mode==='dark'?'white':'#042743'}}>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
