import React from 'react'
import Backnav from './Fetch/Backnav.js'
import HOC from './Fetch/HOC.js'

class HocExample extends React.Component{
    render(){
        return(
            <div className="Content">
                <Backnav/>
                <h1 className="center-align blue-grey-text">Higher Order Components</h1>
                <ul class="collection with-header">
                    <li class="collection-header"><h4>First Names</h4></li>
                    <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                    <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                    <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                    <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                </ul>
         </div>
        )

    }
}

HocExample = HOC(HocExample);
export default HocExample;