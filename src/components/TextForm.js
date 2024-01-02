import React, { useEffect, useState } from 'react'
// import {useEffect} from "react"

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper case was clicked + text");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case", "success")
    }
    const handleClearClick = () => {
        let newText = ' ';
        setText(newText);
        props.showAlert("Cleared the text", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
        

    }
    const [style, setStyle] = useState({ fontStyle: "normal" });
    const italic = () => {
        if (style.fontStyle === "normal") {
            setStyle({ fontStyle: "italic" });
        }
        else {
            setStyle({ fontStyle: "normal" });
        }
        console.log(style);
    }
    const handleButtonClick = () => {
        const sentences = text.split(/(?<=\.|\?|)\s+/);
        const capitalizedText = sentences.map(sentence => {
            if (sentence.length > 0) {
                return sentence.charAt(0).toUpperCase() + sentence.slice(1);
            }
            return sentence;
        }).join(' ');
        setText(capitalizedText);
    };
    const handleCopyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text been copied on clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")
    }
    // const speak = () => {
    //     let newText = new SpeechSynthesisUtterance();
    //     newText.text = text;

    //     useEffect( () => {
    //         window.SpeechSynthesis.speak(text)
    //     }, [text])
    // }

    const [text, setText] = useState();

    return (
        <>
            <div className="conatiner" style = {{color: props.mode === 'dark'? '#cfbdbd':'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === '#343a40'? 'gray':'white', color:props.mode === '#343a40'? 'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={italic}>Italic</button>
                <button className="btn btn-primary mx-2" onClick={handleButtonClick}>Click</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container" my-8  style = {{color: props.mode === 'dark'? '#cfbdbd':'black'}}>

                <h3>Your text summary</h3>
                {/* split function is a method for strings in JavaScript, and if text is not a string, you'll get a TypeError */}
                {typeof text === "string" ? (
                    <div>
                        <p>{text.split(" ").length} words and {text.length} characters</p>
                        <p>{0.008 * text.split(" ").length} Minutes to read</p>
                        <h2>preview</h2>
                        <p>{text.length>0?text: "Enter something in the above textBox to preview it here"}</p>
                    </div>
                ) : (
                    <p>Enter Something</p>
                )}
            </div>
        </>
    )
}
