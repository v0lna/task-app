import React, { Component } from "react";
import { connect } from "react-redux";
import Article from "../components/Article/Article";
import getArticles from "../redux/actions/article";

class ArticleContainer extends Component {
  componentDidMount() {
    this.props.get();
  }
  render() {
    const { get, state } = this.props;
    console.log(this.props);
    return <Article getArticles={get} state={state} />;
  }
}

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    get: () => dispatch(getArticles())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer);