import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ArticleInitState } from '../redux/reducers/article';
import { getArticles } from '../redux/actions/article';
import { Article } from 'components/Article/Article';
import { AppStore } from 'redux/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { bindActionCreators } from 'redux';

type Props = LinkStateProps & LinkDispatchProps;

class ArticleContainer extends Component<Props> {
  componentDidMount() {
    this.props.get();
  }
  render() {
    const { state } = this.props;
    return <Article state={state} />;
  }
}

interface LinkStateProps {
  state: ArticleInitState;
}
interface LinkDispatchProps {
  get: () => void;
}

const mapStateToProps = (state: AppStore): LinkStateProps => ({
  state: state.articles,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    get: bindActionCreators(getArticles, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleContainer);
