import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <h2>Microblog</h2>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="new">Add a new post</NavLink>
      </div>
    )
  }
}
