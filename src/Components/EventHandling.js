import React from "react";

class EventHandling extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: '',
        }
        // this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }
    handleClick = (e, type) => {
        alert("hi")
        alert(type)
        console.log(this)
    }
    handleClick2(e) {
        console.log(e.target.value)
        console.log(e.target.name);
        this.setState({ fname: e.target.value })
    }
    handleClick3(data, data2) {
        console.log(data)
        console.log(data2)
    }

    render() {
        return (
            <div>
                <h1>EventHandling</h1>
                {/* Approach 1 */}
                <button className="waves-effect waves-light btn-small" onClick={this.handleClick}>Primary</button>
                {/* Arrow function Approach (use this one) */}
                <input type="text" value={this.state.fname} name="fname" onChange={this.handleClick2} />Enter your name
                {/* Single line bind method */}
                <button className="waves-effect waves-light btn-small" onClick={this.handleClick3.bind(this, "data")}>Primary</button>
                {/* With add parameter */}
                <button  className="waves-effect waves-light btn-small" onClick={(e) => this.handleClick(e, "type")}>Primary with param</button>

            </div>
        )
    }
}

export default EventHandling;