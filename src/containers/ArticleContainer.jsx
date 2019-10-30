import React, { Component } from "react";
import { connect } from "react-redux";
import {Article} from "../components/Article/Article";
import getArticles from "../redux/actions/article";

class ArticleContainer extends Component {
  componentDidMount() {
    this.props.get();
  }
  render() {
    const { state } = this.props;
    return <Article state={state} />;
  }
}

const mapStateToProps = (state) => ({
  state: state.articles
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
