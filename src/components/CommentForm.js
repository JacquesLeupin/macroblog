import React, { Component } from 'react'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    let { id } = this.props;
    this.props.addComment(id, this.state)
    this.setState({text: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline mb-3">
        <div className="mx-auto">
          <input
            className="form-control"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Add a comment"
            style={{width: "400px"}}
            required
          />
          <button onClick={this.handleSubmit} className="btn btn-primary ml-2">Add</button>
        </div>
      </form>
    );
  }
}

export default CommentForm
