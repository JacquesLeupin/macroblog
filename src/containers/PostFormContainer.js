import { connect } from "react-redux";
import { addPost, editPost } from "../actions";
import PostForm from "../components/PostForm";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    post: state.post
  };
}

export default connect(mapStateToProps, { editPost, addPost })(PostForm);
