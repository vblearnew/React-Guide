import React from 'react'
import Backnav from './Backnav.js'

function HOC(HocComponent) {
    return (
         <div className="Content">
             <Backnav/>
             <p>The List are</p>
             <HocComponent/>
         </div>
    )
}

export default HOC