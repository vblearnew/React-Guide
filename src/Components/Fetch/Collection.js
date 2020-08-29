import React from 'react'

const Collection = (props) =>{
    console.log("this is props",props)
    const {result} = props;
    const collectionList = result.map((value)=>{
        if(value.completed){
            return <li className="collection-item" key="value.id">{value.title}</li>
        }
        else{
            return <li className="collection-item fullprice" key="value.id">{value.title}</li>
        }
    })
    return(
        <ul className="collection">
            <li class="collection-header orange-text ml-4"><h4>To Do List</h4></li>
            {collectionList}
        </ul>
    )
}

export default Collection