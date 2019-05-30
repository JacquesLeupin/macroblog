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
  }

  toggleEdit() {
    this.setState(st => ({
      isEditing: !st.isEditing
    }));
  }

  deleteClick() {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }

  renderDetail() {
    const { id, title, description, body, comments } = this.props.post;
    const commentList = comments ? (
      <div className="mb-3">
        {comments.map(comment => (
          <div key={comment.id}>
            <span onClick={() => this.props.deleteComment(id, comment.id)}>
            <i className="fas fa-times mr-3" style={{color: "red"}}></i>
            </span>
            {comment.text}
          </div>
        ))}
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
            <button className="btn btn-primary btn-sm" onClick={this.toggleEdit}>Edit Post</button>
            <button className="btn btn-danger btn-sm ml-2" onClick={this.deleteClick}>Delete Post</button>
          </div>
        </div>
        <CommentForm addComment={this.props.addComment} id={id} />
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
      />
    );
  }

  render() {
    return this.state.isEditing ? this.renderForm() : this.renderDetail();
  }  
}

export default PostDetail;

const detailStyles = {
  width: "600px",
  margin: "0 auto",
  textAlign: "center"
}
