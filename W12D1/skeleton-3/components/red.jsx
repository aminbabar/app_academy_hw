import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './orange';
import Yellow from './yellow';

class Red extends React.Component {
  render() {
    return(
      <div>
        <h2 className="red"></h2>
        {/* Links here */}
        <Route path="/red/orange" component={Orange}/>
        <Route path="/red/yellow" component={Yellow} />
        {/* Routes here */}
      </div>
    );
  }
};

export default Red;
