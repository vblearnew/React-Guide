import React from 'react'

const Childreactmemo = (props) =>{
    const {score} = props
    console.log(score);
    return(
        <div className="contnet">
            Eg: The score is {score}
        </div>
    )
}

export default React.memo(Childreactmemo)