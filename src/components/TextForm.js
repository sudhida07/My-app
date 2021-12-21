import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState('Enter text here');
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleOnchanges=(event)=>{
        setText(event.target.value)
    }

    return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnchanges} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    )
}
