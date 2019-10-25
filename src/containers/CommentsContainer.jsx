import React, { Component } from "react";
import { connect } from "react-redux";
import { getComments, addLike } from "../redux/actions/comments";
import Comments from "../components/Comments/Comments";

class ArticleContainer extends Component {
  componentDidMount() {
    this.props.get();
  }
  render() {
    const { state, liked } = this.props;
    return <Comments state={state} addLike={liked} />;
  }
}

const mapStateToProps = (state) => ({
  state: state.comments
});

const mapDispatchToProps = (dispatch) => {
  return {
    get: () => dispatch(getComments()),
    liked: (id) => dispatch(addLike(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer);
