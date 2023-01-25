import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handlelowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleclear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleCapitalize = () => {
    let newTextarr = text.split(" ");
    for (let i = 0; i < newTextarr.length; i++) {
      newTextarr[i] =
        newTextarr[i].charAt(0).toUpperCase() +
        newTextarr[i].slice(1).toLowerCase();
    }
    const str2 = newTextarr.join(" ");
    let newText = str2;
    setText(newText);
    props.showAlert("Text is Capitalized", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${props.btnstate} mx-1`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${props.btnstate} mx-1`}
          onClick={handlelowercase}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${props.btnstate} mx-1`}
          onClick={handleCapitalize}
        >
          Capitalize
        </button>
        <button
          className={`btn btn-${props.btnstate} mx-1`}
          onClick={handleclear}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-${props.btnstate} mx-1`}
          onClick={handleExtraSpaces}
        >
          Remove ExtraSpaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length - 1} words {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
