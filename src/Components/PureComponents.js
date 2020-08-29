import React from 'react'
import Backnav from './Fetch/Backnav.js'

class PureComponents extends React.PureComponent{
 constructor(){
     super();
     this.state = {
         counter:0
     }
     console.log("constructor")
 }
 componentDidMount(){
     console.log("Did Mount")
     setInterval(() => {
         this.setState({
             counter:0
         })
     }, 1000);
 }
 render(){
     console.log("Render");
     return(
         <div className="Content">
            <Backnav/>
            <h1 className="center-align blue-grey-text">The Component Lifecycle</h1>
            <p>Counter : {this.state.counter}</p>
         </div>
     )
 }
}

export default PureComponents