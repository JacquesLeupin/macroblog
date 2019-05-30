import React, { Component } from 'react';
import PostForm from './PostForm';
import CommentForm from './CommentForm';

export default class PostDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.deleteClick = this.deleteClick.bind(this)
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  deleteClick() {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }

  renderDetail() {
    const { id, title, description, body, comments } = this.props.post;
    return (
      <div>

        <h1>{title}</h1>
        <h3>{description}</h3>
        <p>{body}</p>

        <button onClick={this.toggleEdit}>Edit Post</button>
        <button onClick={this.deleteClick}>Delete Post</button>
        <ul>
          {comments.map(comment => (
            <li>
              <button onClick={() => this.props.deleteComment(id, comment.id)}>X</button>
              {comment.text}
            </li>
          ))}
        </ul>
        <CommentForm addComment={this.props.addComment} id={id} />
      </div>
    )
  }

  renderForm() {
    return <PostForm {...this.props.post} isEditing={true} editPost={this.props.editPost} toggleEdit={this.toggleEdit} />
  }

  render() {
    return this.state.isEditing ? this.renderForm() : this.renderDetail()
  }
}
