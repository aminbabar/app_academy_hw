import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';

class Rainbow extends React.Component {
  render() {
    return (
      <div>
        <h1>Rainbow Router!</h1>
        <NavLink to="/red">Red</NavLink>
        <NavLink to="/green">green</NavLink>
        <NavLink to="/blue">blue</NavLink>
        <NavLink to="/violet">violet</NavLink>
        {/* Your links should go here */}
        <div id="rainbow">
          
          <Route path="/red" component={Red}/>  
          <Route path="/green" component={Green}/>  
          <Route path="/blue" component={Blue}/>  
          <Route path="/violet" component={Violet}/>  
          {/* Your routes should go here */}
        </div>
      </div>
    );
  }
};

export default Rainbow;
