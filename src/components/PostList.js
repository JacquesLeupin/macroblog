import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.votePost = this.votePost.bind(this)
  }
  

  componentDidMount(){
    this.props.getPostsFromAPI()
  }

  componentDidUpdate(){
    this.props.getPostsFromAPI()
  }

  votePost(evt){
    let data = evt.target.id.split(',')
    this.props.votePost(data[0], data[1])
  }
  
  render() {
    let posts = this.props.posts.map(post => (
      <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title"><Link to={`/${post.id}`}><h3>{post.title}</h3></Link></h5>
            <p className="card-text">{post.description}</p>
            <p>This post has {post.votes} votes</p>
            <button id={`${post.id},up`} className="btn btn-primary btn-sm" onClick={this.votePost}>Upvote Post</button>
            <button id={`${post.id},down`} className="btn btn-danger btn-sm ml-2" onClick={this.votePost}>DownVote Post</button>
          </div>
        </div>
    ))
    // let posts = []
    // for (let [id, post] of Object.entries(this.props.posts)) {
    //   posts.push(
    //     <div key={id} className="card mb-3">
    //       <div className="card-body">
    //         <h5 className="card-title"><Link to={`/${id}`}><h3>{post.title}</h3></Link></h5>
    //         <p className="card-text">{post.description}</p>
    //       </div>
    //     </div>
    //   );
    // }
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
