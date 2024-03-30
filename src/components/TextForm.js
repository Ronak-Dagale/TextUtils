import React,{useState} from 'react'

const TextForm = (props) => {
  const [text,setText]=useState('')

 const handleUpClick=()=>{
     let ans=text.toUpperCase();
     setText(ans);
     props.showAlert("Converted to UpperCase","success")
 }

 const handleOnChange=(event)=>{
  setText(event.target.value)
 } 

 const handleLowClick=()=>{
  let ans=text.toLowerCase();
  setText(ans);
  props.showAlert("Converted to LowerCase","success")
 }

 const handleClrClick=()=>{
  setText('')
  props.showAlert("Text Clear","success")
 }

 const handleCpy=()=>{
   var text=document.getElementById("exampleFormControlTextarea1")
   text.select();
   navigator.clipboard.writeText(text.value)
   document.getSelection().removeAllRanges()
   props.showAlert("Copied to Clipboard","success")
 }
  return (
    <>
    <div className='container my-3 ' style={{color:props.mode?'white':'#042743'}}>
<div className="mb-3">
  <h2 for="myBox" className="form-label mb-4">Enter a text to analyze</h2>
  <textarea className="form-control" style={{backgroundColor:props.mode?'#13466e':'white',color:props.mode?'white':'#042743'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="12"></textarea>
</div>
 <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
 <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Uppercase</button>
 <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClrClick}>Clear text</button>
 <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCpy}>Copy</button>
    </div>
    <div className="container my-4" style={{color:props.mode?'white':'#042743'}}>
      <h4>Your text summary</h4>
      <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words, {text.length} characters</p>
      <h2 className='mt-3'>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}

export default TextForm
