import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostList extends Component {
  render() {
    let posts = []
    for (let [id, post] of Object.entries(this.props.posts)) {
      posts.push(
        <div key={id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title"><Link to={`/${id}`}><h3>{post.title}</h3></Link></h5>
            <p className="card-text">{post.description}</p>
          </div>
        </div>
      );
    }
    return (
      <div className="posts-list" style={listStyles}>
        {posts}
      </div>
    )
  }
}

export default PostList;

const listStyles = {
  maxWidth: "400px",
  margin: "0 auto"
}
