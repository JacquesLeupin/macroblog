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
      postsCopy[action.payload.id] = { ...postsCopy[action.payload.id], ...action.payload.post }
      return { ...state, posts: postsCopy }

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

    case GET_POSTS:
      return { ...state, posts: action.posts } 
    
    case GET_POST:
      console.log("ROOT REDUCER", action.post)
      return { ...state, post: action.post } 

    case SHOW_ERR:
      return

    case SHOW_SPINNER:
      return

    // return state as is
    default:
      return state;
  }
}

export default rootReducer;
