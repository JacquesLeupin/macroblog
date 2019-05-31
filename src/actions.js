import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT, GET_POSTS, GET_POST, SHOW_ERR, SHOW_SPINNER } from "./actionTypes";
import axios from 'axios'

const BASEURL = 'http://localhost:5000/api/posts'


/**************************************************/

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

/**************************************************/

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

/**************************************************/

export function editPost(id, post) {
  return async function (dispatch) {
    try {
      let res = await axios.put(`${BASEURL}/${id}`, post)
      dispatch(updatedPost(res.data))
    } catch (err) {
      dispatch(showErr(err))
    }
  }
}

function updatedPost(post) {
  return { type: EDIT_POST, post }
}

/**************************************************/

export function deletePost(id) {
  return async function (dispatch) {
    try {
      let res = await axios.delete(`${BASEURL}/${id}`)
      dispatch(deletedPost(res.data))
    } catch (err) {
      dispatch(showErr(err))
    }
  }
}

function deletedPost (post) {
  return { type: DELETE_POST, post }
}

/**************************************************/

export function addPost(post) {
  return async function (dispatch) {
    try {
      let res = await axios.post(`${BASEURL}/`, post)
      dispatch(addedPost(res.data))
    } catch (err) {
      dispatch(showErr(err))
    }
  }
}

function addedPost (post) {
  return { type: ADD_POST, post }
}

/**************************************************/

export function addComment(postId, comment) {
  return async function (dispatch) {
    try {
      let res = await axios.post(`${BASEURL}/${postId}/comments`, comment)
      console.log(res)
      dispatch(addedComment(res.data))
    } catch (err) {
      dispatch(showErr(err))
    }
  }
}

function addedComment (post) {
  return { type: ADD_POST, post }
}

/**************************************************/

export function deleteComment(postId, commentId) {
  return async function (dispatch) {
    try {
      let res = await axios.delete(`${BASEURL}/${postId}/comments/${commentId}`)
      dispatch(deletedComment(res.data))
    } catch (err) {
      dispatch(showErr(err))
    }
  }
}

function deletedComment (post) {
  return { type: ADD_POST, post }
}

/**************************************************/

function showErr(msg){
  return { type: SHOW_ERR, msg }
}

function startLoad (){
  return { type: SHOW_SPINNER }
}

