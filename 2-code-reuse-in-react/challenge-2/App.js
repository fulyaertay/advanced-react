import React from "react"
import {withFavoriteNumber} from "./withFavoriteNumber"

function App(props) {
    console.log(props.somePropHere)
    return (
        <div>{props.somePropHere}</div>
    )
}

export default withFavoriteNumber(App)