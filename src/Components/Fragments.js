import React from 'react'

class Fragments extends React.Component{
 render(){
     return(
         <React.Fragment>
            <h1 class="center-align blue-grey-text">Fragments</h1>
            A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
         </React.Fragment>
     )
 }
}

export default Fragments