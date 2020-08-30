import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './Components/Navigation.js';
import Fetch from './Components/Fetch.js';
import LifeCycle from './Components/LifeCycle.js';
import PureComponents from './Components/PureComponents.js';
import Fragments from './Components/Fragments.js';
import logo from './images/logo.svg'; 



class App extends React.Component{
  state = {
    Links:[
      {title:"Life Cycle",link:"/LifeCycle",description:"Everything you see in a React application is a component or part of a component. In React, components are designed to follow the natural cycle of life. They are born (creation), grow (updating), and finally die (deletion). This is called the component lifecycle.For each phase of a component’s life, React provides access to certain built-in events/methods called lifecycle hooks or lifecycle methods.",id:1},
      {title:"Pure Components",link:"/PureComponents",description:"Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered. Pure Components restricts the re-rendering ensuring the higher performance of the Component",id:2},
      {title:"Fragments",link:"/Fragments",description:"A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.",id:3},
      {title:"Fetch",link:"/Fetch",description:"You can use any AJAX library you like with React. Some popular ones are Axios, jQuery AJAX, and the browser built-in window.fetch.You should populate data with AJAX calls in the componentDidMount lifecycle method. This is so you can use setState to update your component when the data is retrieved.",id:4},
      {title:"React Memo",link:"/ReactMemo",description:"React. memo is a higher order component. ... If your function component renders the same result given the same props, you can wrap it in a call to React. memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.",id:5}
    ]
  }
  render(){
    return(
      <div className="appContent">
          <Router>
            <Switch>
              <Route path="/" exact>
                <div className="img mt-6 mb-6">
                  <img src={logo} alt="Logo" className="center-image"/>
                </div>
                <h1 className="orange-text center-align">React Guide</h1>
                <Navigation Links={this.state.Links} />
              </Route>
              <Route path="/LifeCycle">
                <LifeCycle/>
              </Route>
              <Route path="/PureComponents">
                <PureComponents/>
              </Route>
              <Route path="/Fragments">
                <Fragments/>
              </Route>  
              <Route path="/Fetch">
                <Fetch/>
              </Route>
            </Switch>
          </Router>
      </div>
    )
  }
}

export default App;
