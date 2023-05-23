import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("UpperCase was Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase !", "success")
    }

    const handleLoClick = () =>{
        // console.log("LowerCase was Clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase !", "success")
    }

    const capitalClick = () =>{
        let newText = text.toLowerCase()
        let words = newText.split(' ')
        for(let i=0; i<words.length; i++){
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        }
        words = words.join(" ")
        setText(words)
        props.showAlert("Capitalized !", "success")
    }


    const copyToClipboard = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied !", "success")
    }

    const handleOnChange = (event) =>{
        // console.log("On Change")
        // console.log(event.target.value);
        setText(event.target.value)
    }

    const[text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode === 'light'?'black':'white'}} >
        <h1 className='mb-4' >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'light'?'white':'rgb(35 62 100)', color: props.mode === 'light'?'black':'white'}} onChange={handleOnChange} value={text} rows="10"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={capitalClick}>Capitalize</button>
        
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy Text</button>
    </div>
    <div className="container" style={{color: props.mode === 'light'?'black':'white'}} >
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length>0}).length} words and, {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((ele)=>{return ele.length>0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0? text : "Nothing to preview"}</p>
    </div>
    </>
  )
}
