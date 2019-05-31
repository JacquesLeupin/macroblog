import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.isEditing) {
      this.setState({
        title: this.props.title,
        description: this.props.description,
        body: this.props.body
      });
    }
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // if editing post
    if (this.props.isEditing) {
      this.props.editPost(this.props.postId, this.state)
      this.setState({
        title: '',
        description: '',
        body: ''
      })
      this.props.toggleEdit();
    }
    // if adding new post
    else {
      this.props.addPost(this.state)
      this.setState({
        title: '',
        description: '',
        body: ''
      })
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div style={formStyles}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Please enter a title"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Please enter a description"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              placeholder="Please enter a body"
              rows="10"
              required
            />
          </div>
          <button onClick={this.handleSubmit} className="btn btn-primary">
            {this.props.isEditing ? "Update" : "Add"}
          </button>
        </form>
        {this.props.isEditing ? (
          <button className="btn btn-secondary btn-sm mt-3" onClick={this.props.toggleEdit}>Back</button>
        ) : (
          <button className="btn btn-secondary btn-sm mt-3" onClick={() => this.props.history.go(-1)}>Back</button>
        )}
      </div>
    )
  }
}

export default PostForm

const formStyles = {
  width: "400px",
  margin: "0 auto"
}
