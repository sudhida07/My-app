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

    return (
       <>
       <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnchanges} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary' onClick={handleClearText}>Clear text</button>
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
