import React from "react"

export function withFavoriteNumber(component) {
    const C = component
    return function(props) {
        return (
            <C somePropHere="Hi there!" favoriteNumber={42} {...props}/>
        )
    }
}
