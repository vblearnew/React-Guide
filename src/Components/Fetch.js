import React from 'react';
import Collection from './Fetch/Collection.js'
import Backnav from './Fetch/Backnav.js'

class Fetch extends React.Component{

constructor(){
    super();
    console.log("in constructor()");
    this.state = {
        result:null
    }
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => {
        return response.json()
    })
    .then((json) => {
        this.setState({
            result:json.slice(0,10)
        })
    })
    .catch((err) => {
            console.log(err)
    })
    console.log("in componentDidMount()");
}
 render(){
     console.log("in render()");
     console.log(this.state);
     return(
         <div className="Content">
            <Backnav/>
            <h1 className="center-align blue-grey-text">Ajax Call</h1>
            <p>You can use any AJAX library you like with React. Some popular ones are Axios, jQuery AJAX, and the browser built-in window.fetch.</p>
            {this.state.result ? <Collection result={this.state.result} /> : <img alt="" src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />}
         </div>
     )
 }
}

export default Fetch