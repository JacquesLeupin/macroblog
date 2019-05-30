import React, { Component } from 'react'

class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',

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
    this.props.addComment(this.state.text, id)
    this.setState({text: ''})
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add a comment"
          required />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    )
  }
}


export default CommentForm

