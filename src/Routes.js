import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostDetail from './components/PostDetail'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PostList posts={this.props.posts} />}
        />
        <Route
          exact
          path="/new"
          render={rtProps => (
            <PostForm {...rtProps} addPost={this.props.addPost}/>
          )}
        />
        <Route exact path="/:id"
          render={rtProps => {
            const targetPost = this.props.posts.find(post => post.id === rtProps.match.params.id);
            return (
              <PostDetail 
                {...rtProps}
                post={targetPost}
                editPost={this.props.editPost}
                deletePost={this.props.deletePost}
                addComment={this.props.addComment}
                deleteComment={this.props.deleteComment}
              />
            );
        }}/>
      </Switch>
    );
  }
}

export default Routes;
