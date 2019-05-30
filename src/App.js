import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Routes from './Routes'
import uuid from 'uuid/v4'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [
        {
          id: 'aslkdfjasdlfj',
          title: 'Post 1',
          description: 'This is the first post',
          body: 'First Post'
        },
        {
          id: 'aslkdfjasdlfj',
          title: 'Post 2',
          description: 'This is the second post',
          body: 'Second Post'
        }
      ]
    }
    this.addPost = this.addPost.bind(this)
    this.editPost = this.editPost.bind(this)
    this.deletePost = this.deletePost.bind(this)
    this.addComment = this.addComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
  }

  addPost(post) {
    let newPost = { ...post, id: uuid(), comments: [] }
    this.setState({ posts: [...this.state.posts, newPost] })
  }

  editPost(post, id) {
    this.setState(st => {
      let idx = st.posts.findIndex(post => post.id === id)
      let postsCopy = [...st.posts]
      postsCopy[idx] = { ...post, id: id }
      return { ...this.state, posts: postsCopy }
    })
  }

  deletePost(id) {
    this.setState(st => {
      let idx = st.posts.findIndex(post => post.id === id)
      let postsCopy = [...st.posts]
      postsCopy.splice(idx, 1)
      return { ...this.state, posts: postsCopy }
    })
  }

  addComment(text, id){
    this.setState(st => {
      let idx = st.posts.findIndex(post => post.id === id)
      let postsCopy = [...st.posts]
      postsCopy[idx].comments.push({text, id: uuid()})
      return { ...this.state, posts: postsCopy }
    })
  }

  deleteComment(postId, commentId) {
    this.setState(st => {
      let idx = st.posts.findIndex(post => post.id === postId)
      let postsCopy = [...st.posts]
      let commentIdx = postsCopy[idx].comments.findIndex(comment => comment.id === commentId)
      postsCopy[idx].comments.splice(commentIdx, 1)
      return { ...this.state, posts: postsCopy }
    })
  }

  render() {

    return (
      <BrowserRouter>
        <Navbar />
        <Routes
          posts={this.state.posts}
          addPost={this.addPost}
          editPost={this.editPost}
          deletePost={this.deletePost}
          addComment={this.addComment}
          deleteComment={this.deleteComment}
        />
      </BrowserRouter>
    )
  }
}





