import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick = ()=>{
        // console.log("Clear text was clicked: " + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!","success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
    const [text,setText] = useState('');
    //text="new text";  // wrong way to change text
    //setText("new text");  // correct way to change text
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <form>
        <div className="form-group">
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        </form>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space(s)</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ")[text.split(" ").length - 1]===""?text.split(" ").length - 1:text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} minute(s) read.</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
