import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";
import uuid from 'uuid/v4'

const INITIAL_STATE = {
  posts: {
    'aslkdfjas2222dlfj': {
      title: 'Post 1',
      description: 'This is the first post',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: {
        '983bif94ibf': 'tippin on fo-fo\'s',
        '983bif9465g': 'hello'
      }
    },
    'aslkdfjas4545dlfj': {
      title: 'Post 2',
      description: 'This is the second post',
      body: 'Id ornare arcu odio ut sem nulla pharetra. Placerat orci nulla pellentesque dignissim enim sit. Nisl nunc mi ipsum faucibus vitae aliquet nec. Ut eu sem integer vitae justo eget magna fermentum iaculis. Odio ut sem nulla pharetra diam sit. Commodo quis imperdiet massa tincidunt. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Etiam sit amet nisl purus in mollis. Eget nunc scelerisque viverra mauris in. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Quam elementum pulvinar etiam non.',
      comments: {
        '983b3544ibf': 'blah blah blah',
        '9bbbif9465g': 'rithm school'
      }
    }
  }
};

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

    // return state as is
    default:
      return state;
  }
}

export default rootReducer;
