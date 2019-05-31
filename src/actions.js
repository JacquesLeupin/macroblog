import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT, GET_POSTS, GET_POST, SHOW_ERR, SHOW_SPINNER } from "./actionTypes";
import axios from 'axios'

const BASEURL = 'http://localhost:5000/api/posts'

export function addPost(post) {
  return {
    type: ADD_POST, payload: { post }
  };
}

export function editPost(post, id) {
  return {
    type: EDIT_POST, payload: { post, id }
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST, payload: { id }
  };
}

export function addComment(text, id) {
  return {
    type: ADD_COMMENT, payload: { text, id }
  };
}

export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT, payload: { postId, commentId }
  };
}

export function getPostsFromAPI() {

  return async function (dispatch) {
    dispatch(startLoad())
    try {
      let res = await axios.get(BASEURL)
      dispatch(gotPosts(res.data))
    } catch (err) {
      dispatch(showErr(err))
    }
  }
}

function gotPosts(posts) {
  return { type: GET_POSTS, posts }
}

export function getPostFromAPI(id) {

  return async function (dispatch) {
    dispatch(startLoad())
    try {
      let res = await axios.get(`${BASEURL}/${id}`)
      dispatch(gotPost(res.data))
    } catch (err) {
      dispatch(showErr(err))
    }
  }
}

function gotPost (post) {
  return { type: GET_POST, post }
}

function showErr(msg){
  return { type: SHOW_ERR, msg }
}

function startLoad (){
  return { type: SHOW_SPINNER }
}

