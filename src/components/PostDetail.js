import React, { Component } from 'react';
import PostForm from './PostForm';
import CommentForm from './CommentForm';

class PostDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.deleteClick = this.deleteClick.bind(this)
    this.votePost = this.votePost.bind(this)
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getPostFromAPI(id)
  }

  componentDidUpdate() {
    let id = this.props.match.params.id
    this.props.getPostFromAPI(id)
  }

  toggleEdit() {
    this.setState(st => ({
      isEditing: !st.isEditing
    }));
  }

  deleteClick() {
    this.props.deletePost(this.props.match.params.id)
    this.props.history.push('/')
  }

  votePost(evt){
    this.props.votePost(this.props.match.params.id, evt.target.id)
  }

  renderDetail() {
    const { id, title, description, body, comments, votes } = this.props.post;
    const postId = this.props.match.params.id;
    let commentsArr = comments.map(comment => (
      <div key={comment.id}>
        <span onClick={() => this.props.deleteComment(id, comment.id)}>
          <i className="fas fa-times mr-3" style={{ color: "red" }}></i>
        </span>
        {comment.text}
      </div>
    ))
    const commentList = comments ? (
      <div className="mb-3">
        {commentsArr}
      </div>
    ) : (
        <div className="mb-3">No comments yet...</div>
    )
    return (
      <div style={detailStyles}>
        <div className="card mb-3">
          <div className="card-body">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <p>{body}</p>
            <p>This post has {votes} votes.</p>
            <button className="btn btn-primary btn-sm" onClick={this.toggleEdit}>Edit Post</button>
            <button className="btn btn-danger btn-sm ml-2" onClick={this.deleteClick}>Delete Post</button>
            <button id="up" className="btn btn-primary btn-sm" onClick={this.votePost}>Upvote Post</button>
            <button id="down" className="btn btn-danger btn-sm ml-2" onClick={this.votePost}>DownVote Post</button>
          </div>
        </div>
        <CommentForm addComment={this.props.addComment} id={postId} />
        {commentList}
      </div>
    );
  }

  renderForm() {
    return (
      <PostForm
        {...this.props.post}
        isEditing={true}
        editPost={this.props.editPost}
        toggleEdit={this.toggleEdit}
        postId={this.props.match.params.id}
      />
    );
  }

  render() {
    if (!this.props.post.title) {
      // put spinner here
      return "LOADING";
    } else {
      return this.state.isEditing ? this.renderForm() : this.renderDetail();
    }
  }
}  

export default PostDetail;

const detailStyles = {
  width: "600px",
  margin: "0 auto",
  textAlign: "center"
}
