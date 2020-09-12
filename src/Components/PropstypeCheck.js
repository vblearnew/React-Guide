import React from "react";
import PropTypes from "prop-types";
import Backnav from './Fetch/Backnav.js'

class PropstypeCheck extends React.PureComponent {
    constructor() {
        super()
    }
    render() {
        console.log(this)
        return (
            <div className="Content">
                <Backnav/>
                <h1 className="center-align blue-grey-text">PropstypeCheck component</h1>
            </div>
        )
    }
}

PropstypeCheck.propTypes = {
    StringProp: PropTypes.string,
    numberProp:PropTypes.number
};

PropstypeCheck.defaultProps = {
    defaultProp:"this is default"
}

// PropTypeCheck.propTypes = {
//     propArray: PropTypes.array,
//     propBool: PropTypes.bool.isRequired,
//     propFunc: PropTypes.func,
//     propNumber: PropTypes.number,
//     propString: PropTypes.string,
//     propObject: PropTypes.object
// }

// PropTypeCheck.defaultProps = {
//     propArray: [1, 2, 3, 4, 5],
//     propBool: true,
//     propFunc: function (e) { return e },
//     propNumber: 1,
//     propString: "string value....",
//     propObject: {
//         objectName1: "value1",
//         objectName2: "value2",
//         objectName3: "value3"
//     }
// }


export default PropstypeCheck;