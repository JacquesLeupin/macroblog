import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

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
