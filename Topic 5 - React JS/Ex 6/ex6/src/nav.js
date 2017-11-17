import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  
    render() {
      return (
        <nav>
          <ul>
            <li><Link to="/movies">Movie List</Link></li>
            <li><Link to="new">Add new movie</Link></li>
          </ul>
        </nav>
      );
    }
  }
  
  export default Nav;
  