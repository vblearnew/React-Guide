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
import Reactmemo from './Components/ReactMemo.js';
import HocExample from './Components/HocExample.js';
import PropstypeCheck from './Components/PropstypeCheck.js';
import ErrorBoundary from './Components/ErrorBoundary.js';
import ReactRef from './Components/ReactRef.js';
import EventHandling from './Components/EventHandling.js';
import logo from './images/logo.svg';

class App extends React.Component{
  state = {
    Links:[
      {title:"Life Cycle",link:"/LifeCycle",description:"Everything you see in a React application is a component or part of a component. In React, components are designed to follow the natural cycle of life. They are born (creation), grow (updating), and finally die (deletion). This is called the component lifecycle.For each phase of a component’s life, React provides access to certain built-in events/methods called lifecycle hooks or lifecycle methods.",id:1},
      {title:"Pure Components",link:"/PureComponents",description:"Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered. Pure Components restricts the re-rendering ensuring the higher performance of the Component",id:2},
      {title:"Fragments",link:"/Fragments",description:"A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.",id:3},
      {title:"Fetch",link:"/Fetch",description:"You can use any AJAX library you like with React. Some popular ones are Axios, jQuery AJAX, and the browser built-in window.fetch.You should populate data with AJAX calls in the componentDidMount lifecycle method. This is so you can use setState to update your component when the data is retrieved.",id:4},
      {title:"React Memo",link:"/ReactMemo",description:"React. memo is a higher order component. ... If your function component renders the same result given the same props, you can wrap it in a call to React. memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.",id:5},
      {title:"HOC",link:"/HocExample",description:"A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.",id:6},
      {title:"PropsTypes",link:"/PropstypeCheck",description:"As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property.",id:7},
      {title:"Error Boundary",link:"/ErrorBoundary",description:"In the past, JavaScript errors inside components used to corrupt React’s internal state and cause it to emit cryptic errors on next renders. These errors were always caused by an earlier error in the application code, but React did not provide a way to handle them gracefully in components, and could not recover from them.",id:8},
      {title:"React Ref",link:"/ReactRef",description:"In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.",id:9},
      {title:"Event handling",link:"/EventHandling",description:"Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences",id:10}
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
              <Route path="/ReactMemo">
                <Reactmemo/>
              </Route>
              <Route path="/HocExample">
                <HocExample/>
              </Route>
              <Route path="/PropstypeCheck">
                <PropstypeCheck/>
              </Route>
              <Route path="/ErrorBoundary">
                <ErrorBoundary/>
              </Route>
              <Route path="/ReactRef">
                <ReactRef/>
              </Route>
              <Route path="/EventHandling">
                <EventHandling/>
              </Route>
            </Switch>
          </Router>
      </div>
    )
  }
}

export default App;
