import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    // console.log("Uppercase was clicked" + text)
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase!","success");
  };
  const handleloclick = () => {
    // console.log("Uppercase was clicked" + text)
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase!","success");
  };
  const handleClear = () => {
    // console.log("Uppercase was clicked" + text)
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared!","success");
  };

  const handleinvert = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Text Inverted!","success");
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text "New text"; //This is the wrong way to update text
  // setText("new text");//This is the right way to update text
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#051652" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "#051652",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleloclick}>
          Convert To lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleinvert}>
          Invert Your Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#051652" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}