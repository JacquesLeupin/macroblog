import { connect } from "react-redux";
import PostList from "../components/PostList";
import { getPostsFromAPI, votePost } from '../actions'

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { getPostsFromAPI, votePost })(PostList);
