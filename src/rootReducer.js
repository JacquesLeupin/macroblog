import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT, SHOW_ERR, SHOW_SPINNER, GET_POSTS, GET_POST } from "./actionTypes";
import uuid from 'uuid/v4'

const INITIAL_STATE = {
  posts: [],
  post: {}
}

function rootReducer(state = INITIAL_STATE, action) {
  let postsCopy = { ...state.posts }
  switch (action.type) {
    // add post
    case ADD_POST:
      let newPostId = uuid();
      postsCopy[newPostId] = { ...action.payload.post, comments: {} }
      return { ...state, posts: postsCopy }

    // edit post
    case EDIT_POST:
      let idx = postsCopy.findIndex(post => post.id === action.post.id);
      postsCopy[idx] = action.post;
      return { ...state, posts: postsCopy, post: { comments: state.posts[idx].comments, ...postsCopy[idx] } }

    // delete post
    case DELETE_POST:
      delete postsCopy[action.payload.id]
      return { ...state, posts: postsCopy }

    // add comment
    case ADD_COMMENT:
      let newCommentId = uuid();
      postsCopy[action.payload.id].comments[newCommentId] = action.payload.text;
      return { ...state, posts: postsCopy }

    // delete comment
    case DELETE_COMMENT:
      delete postsCopy[action.payload.postId].comments[action.payload.commentId]
      return { ...state, posts: postsCopy }

    // get posts
    case GET_POSTS:
      return { ...state, posts: action.posts } 
    
    // get post
    case GET_POST:
      return { ...state, post: action.post } 

    // show error
    case SHOW_ERR:
      break

    // show spinner
    case SHOW_SPINNER:
      break

    // return state as is
    default:
      return state;
  }
}

export default rootReducer;
