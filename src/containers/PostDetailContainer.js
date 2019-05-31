import { connect } from "react-redux";
import { editPost, deletePost, addComment, deleteComment } from "../actions";
import PostDetail from "../components/PostDetail";
import { getPostFromAPI } from '../actions'

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    post: state.posts[ownProps.match.params.id]
  };
}

const mapDispatchToProps = {
  editPost,
  deletePost,
  addComment,
  deleteComment
};

export default connect(mapStateToProps, { getPostFromAPI })(PostDetail);
