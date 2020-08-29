import React from 'react'
import Backnav from './Fetch/Backnav.js'


class Fragments extends React.Component{
 render(){
     return(
         <React.Fragment>
           <Backnav/>
            <h1 class="center-align blue-grey-text">Fragments</h1>
            A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
         </React.Fragment>
     )
 }
}

export default Fragments