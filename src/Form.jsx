import { useState } from "react";
import { Link } from "react-router-dom";


function Form(props){
        const[text,setText]=useState("")
    function clickClear(){
            let newText = ("")
            return(setText(newText))
    }
    function clickUp(){
            let newText = text.toUpperCase();
            return ( setText(newText)) 
    }
    function clickDown(){
        let newText =text.toLowerCase();
        return (setText(newText))
    }
    function reverseText(){
        let newText = text.split("").reverse().join("");
        return (setText(newText))
    }
    

    return(
       
        <div className="myform"> 
            <div className="mb-3">
                <label htmlFor="Textarea" className="form-label "><h1>{props.heading}</h1></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Please Write Here .." value={text} onChange={(e)=>{setText(e.target.value)}} rows="3"></textarea>
                <h5 className="my-2">Your text summary :</h5>
                <p>You entered {text.split(" ").length-1} words & {text.length} characters.</p>
                <button type="button" className="btn btn-warning mx-3 " onClick={clickClear}>Clear all text</button>
                <button type="button" className="btn btn-warning my-3" onClick={clickUp}>Convert in UpperCase</button>
                <button type="button" className="btn btn-warning mx-3 " onClick={clickDown}>Convert in LowerCase</button>
                <button type="button" className="btn btn-warning mx-1 " onClick={reverseText}>Reverse the text</button>
                
                
            </div>

        </div>
       
       

        )

}
export default Form;
   
