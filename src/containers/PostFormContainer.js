import { connect } from "react-redux";
import { addPost, editPost } from "../actions";
import PostForm from "../components/PostForm";

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const mapDispatchToProps = { addPost, editPost };

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
