import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {
    const count = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default App

// https://thoughtbot.com/blog/using-redux-with-react-hooks
// https://react-redux.js.org/api/hooks#usage-warnings