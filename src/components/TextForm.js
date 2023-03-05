import React , {useState} from 'react'

function TextForm(props) {
    const handleUpClick = () => {
        //console.log("uppercase was clicked : " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase" , "success")
    }
    const handleLoClick = () => {
        //console.log("uppercase was clicked : " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase" , "success")
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared" , "success")
    }
    const handleVowelClick = () => {
        let newText = text.replace(/a|e|i|o|u/g,'')
        setText(newText)
        props.showAlert("Vowels have been removed" , "success")
    }
    const handleCopyClick = () => {
        var newText = document.getElementById("myBox")
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.showAlert("Text copied" , "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim()
        setText(newText)
        props.showAlert("Extra spaces removed" , "success")
    }
    const handleOnChange = (event) => {
        //console.log("Onchange")
        setText(event.target.value)
    }
   const[text , setText] = useState('')
   //text = "hurrraaaaahhhhhhhhh" // wrong way to change state
   //setText("Please enter the text") //correct way
   
   const countWord = (text) => {

        // const len = text.length;
        // var words = 0;

        // if(len > 0){
        //     words = text.split(" ")
        //     for(var i = 0; i < words.length; ++i){
        //         if(words[i] === " ")
        //             words.splice(i , 1)
        //     }
        //     words = words.length
        // }
        // return words 
        let words;
        if (text === "") 
            words = 0;
        else 
            words = text.trim().split(/\s+/).length;
        return words;
   
    }
   return (
    <>
        <div>
            <h2 style={{color : props.mode === 'dark' ? 'white' : '#1f5056'}}>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor : props.mode ==='light'?'white':'grey',color:props.mode ==='dark'?'white':'#1f5056'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>toUppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>toLowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>clearText</button>
            <button className="btn btn-primary mx-2" onClick={handleVowelClick}>deleteVowels</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>copyText</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#1f5056'}}>
            <h1>Your text summary</h1>
            <p>{countWord(text)} words and {text.length} characters</p>
            <p>{ 0.008 * countWord(text)} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter something in the above textbox to preview it'}</p>
        </div>

    </>
  )
}

export default TextForm
