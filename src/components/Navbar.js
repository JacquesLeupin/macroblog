import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between mb-5">
        <span className="navbar-brand ml-2">Macroblog</span>
        <div className="mr-2">
          <span className="nav-item mr-4">
            <NavLink className="text-light" to="/">Blog</NavLink>
          </span>
          <span className="nav-item">
            <NavLink className="text-light" to="new">Add a Post</NavLink>
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
