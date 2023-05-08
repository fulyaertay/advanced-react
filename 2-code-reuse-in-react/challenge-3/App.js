import React from "react"
import Menu from "./Menu"
import Favorite from "./Favorite"
import Toggler from "./Toggler"

function App() {
    return (
        <div>
            <Toggler render={({on, toggle}) => {
                return (
                    <Menu on={on} toggle={toggle}/>
                )
            }}/>
            <hr />
            <Favorite />
        </div>
    )
}

export default App