import React from "react"
import Toggler from "./Toggler"
// render the Toggler inside the Menu, and use the render prop to determine what will get displayed
// remember to bring in the "goodies" (state and methods) to that function so you can make this work

function Menu(props) {
    return (
        <div>
            <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
            <nav style={{display: props.on ? "block" : "none"}}>
                <h6>Signed in as Coder123</h6>
                <p><a>Your Profile</a></p>
                <p><a>Your Repositories</a></p>
                <p><a>Your Stars</a></p>
                <p><a>Your Gists</a></p>
            </nav>
        </div>
    ) 
}

export default Menu