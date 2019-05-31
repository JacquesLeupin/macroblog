import { connect } from "react-redux";
import PostDetail from "../components/PostDetail";
import { getPostFromAPI, editPost, deletePost, addComment, deleteComment, votePost } from '../actions'

function mapStateToProps(state, ownProps) {
  return {
    post: state.post
  };
}

export default connect(mapStateToProps, { getPostFromAPI, editPost, deletePost, addComment, deleteComment, votePost })(PostDetail);
