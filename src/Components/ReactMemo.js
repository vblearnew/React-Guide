import React from 'react'
import Childreactmemo from './Fetch/Childreactmemo.js'
import Backnav from './Fetch/Backnav.js'

class Reactmemo extends React.Component{
    state = {
        score:1
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                score:1
            })  
        }, 1000);
    }
    render(){
        return(
            <div className="content">
                <Backnav/>
                <h1 className="center-align blue-grey-text">React Memo</h1>
                <Childreactmemo score={this.state.score} />
                <p>React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes.</p>
                <p>If your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.</p>
                <p>React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState or useContext Hook in its implementation, it will still rerender when state or context change.</p>
                <p>This method only exists as a performance optimization. Do not rely on it to “prevent” a render, as this can lead to bugs.</p>
            </div>
        )
    }
}

export default Reactmemo