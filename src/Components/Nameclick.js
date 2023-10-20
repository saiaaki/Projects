import {useState} from "react";
function Nameclick( ) {
     
     const[data,setdata]=useState()
    function html() {
        setdata("HTML structures content on the web, while React, a JavaScript library, creates dynamic and interactive user interfaces. ")
    }
    function js() {
        setdata("Javascript (JS) is a scripting languages, primarily used on the Web. It is used to enhance HTML pages and is commonly found embedded in HTML code.")
    }
    function react(){
        setdata("It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.")
    }
    return(
        <>
            <div className="sub">
                <a onClick={html}> HTML</a> 
                <a onClick={js}>JAVASCRIPT</a>
                <a onClick={react}> REACT</a>
            </div>
            <div>
                <h3>{data}</h3>
            </div>
         </>
    )
}
export default Nameclick