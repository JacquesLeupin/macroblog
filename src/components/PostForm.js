import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    if(this.props.isEditing){
      this.setState({
        title: this.props.title,
        description: this.props.description,
        body: this.props.body
      })
    }
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault()

    if (this.props.isEditing){
      this.props.editPost(this.state, this.props.id)
      this.setState({
        title: '',
        description: '',
        body: ''
      })
      this.props.toggleEdit()
    }else{
      this.props.addPost(this.state)
      this.setState({
        title: '',
        description: '',
        body: ''
      })
      this.props.history.push('/')
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Please enter a title"
          required />
        <input
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          placeholder="Please enter a description"
          required />
        <textarea
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
          placeholder="Please enter a body"
          required />
        <button onClick={this.handleSubmit}>Add</button>
        <button onClick={this.handleSubmit}>Cancel</button>
      </form>
    )
  }
}


export default PostForm

