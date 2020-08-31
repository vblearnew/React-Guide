import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";



const Backnav = (props) =>{
    return(
        <Link className="btn-floating btn-large waves-effect waves-light orange floating-btn" to="/"><i className="material-icons blue-grey-text">home</i></Link>
    )
}

export default Backnav