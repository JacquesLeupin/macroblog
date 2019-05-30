import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostList extends Component {


  render() {
    let posts = this.props.posts.map(post => (

      <div key={post.id}>
        <Link to={`/${post.id}`}>
          <h3>{post.title}</h3>
          <div>{post.description}</div>
        </Link>
      </div>

    ))

    return (
      <div>
        {posts}
      </div>
    )
  }
}
