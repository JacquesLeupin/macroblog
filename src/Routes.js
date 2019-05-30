import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import PostListContainer from './containers/PostListContainer'
import PostFormContainer from './containers/PostFormContainer'
import PostDetailContainer from './containers/PostDetailContainer'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PostListContainer posts={this.props.posts} />}
        />
        <Route
          exact
          path="/new"
          render={rtProps => <PostFormContainer {...rtProps} />}
        />
        <Route
          exact
          path="/:id"
          render={rtProps => <PostDetailContainer {...rtProps} />}
        />
      </Switch>
    );
  }
}

export default Routes;
