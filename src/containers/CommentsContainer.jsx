import React, { Component } from "react";
import { connect } from "react-redux";
import getComments from "../redux/actions/comments";
import Comments from "../components/Comments/Comments";

class ArticleContainer extends Component {
  componentDidMount() {
    this.props.get();
  }
  render() {
    const { state } = this.props;
    return <Comments state={state} />;
  }
}

const mapStateToProps = (state) => ({
  state: state.comments
});

const mapDispatchToProps = (dispatch) => {
  return {
    get: () => dispatch(getComments())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer);
