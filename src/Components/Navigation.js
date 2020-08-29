import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";



const Navigation = (props) =>{
    const {Links} = props;
    const itemList = Links.map((data)=>{
        return (
        <div className="col s4" key={data.id}>
            <div className="card blue-grey darken-1 hoverable">
                <div className="card-content white-text">
                    <span className="card-title">{data.title}</span>
                    <p className="truncate">{data.description}</p>
                </div>
                <div className="card-action">
                    <Link to={data.link}>More</Link>
                </div>
            </div>
        </div>
        )
    })
    return(
        <div className="row">   
            {itemList}
        </div>
    )
} 



export default Navigation