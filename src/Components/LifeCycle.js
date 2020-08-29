import React from 'react'
import lifecycleimg from '../images/lifecycle.png'

class LifeCycle extends React.Component{
constructor(){
    super();
    console.log("This is Constructor") 
    this.state = {
        title:"Life Cycle", 
    }
 }
componentDidMount(){
    console.log("Component Did Mount")
    this.setState({
        title:"Life Cycle Method"
    })
    console.log(this.state)
 }
shouldComponentUpdate(nextProps,nextState){
    console.log(nextState)
    console.log("should Component Update")
    if (this.state.title === nextState.title) {
        return false
      } return true
}
 render(){
     console.log("Rendered")
     return(
         <div className="Content">
            <h1 className="center-align blue-grey-text">Life Cycle Methods</h1>
            <img src={lifecycleimg} alt="Logo" className="center-image"/>
         </div>
     )
 }
}

export default LifeCycle