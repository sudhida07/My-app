import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState('');
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleOnchanges=(event)=>{
        setText(event.target.value)
    }

    const handleClearText=()=>{
        setText('')
    }

    const handleCopyText=()=>{
        var textData=document.getElementById("myBox");
        textData.select();
        navigator.clipboard.writeText(textData.value);
    
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
       <>
       <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
       <textarea id="myBox" className="form-control" value={text} onChange={handleOnchanges}  rows="3"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopyText}>copy text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>remove extra space</button>
        </div>

        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length}</p>
            <h2>preview</h2>
            <p>{text}</p>

        </div>

       
        </>
        
   
    )
}
