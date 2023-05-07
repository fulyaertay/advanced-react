import React from "react"
import WindowTracker from "./WindowTracker"

export default class App extends React.Component {
    state = {
        show: true
    }
    
    toggle = () => {
        this.setState(prevState => ({show: !prevState.show}))
    }
    
    render() {
        return (
            <div className="container">
                <button onClick={this.toggle}>
                    Toggle WindowTracker
                </button>
                {this.state.show && <WindowTracker />}
            </div>
        )
    }
}
