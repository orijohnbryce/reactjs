import React, { Component } from 'react'

export class ClassComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 5
        }

    }
    componentDidMount() {
        console.log("Component first load (mount)");
    }

    componentDidUpdate() {
        console.log("Component rerendered");
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    render() {
        return (
            <div>ClassComp
                <p> counter is: {this.state.counter}</p>
                <button onClick={()=>{this.setState({counter: this.state.counter + 1})}}> + </button>
            </div>
        )
    }
}

export default ClassComp