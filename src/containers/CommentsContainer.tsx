import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments, addLike } from '../redux/actions/comments';
import { Comments } from '../components/Comments/Comments';
import { CommentsInitState } from 'redux/reducers/comments';
import { AppStore } from 'redux/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { bindActionCreators } from 'redux';

interface LinkStateProps {
  state: CommentsInitState;
}
interface LinkDispatchProps {
  get: () => void;
  liked: (id: number) => void;
}

type Props = LinkStateProps & LinkDispatchProps;

class ArticleContainer extends Component<Props> {
  componentDidMount() {
    this.props.get();
  }
  render() {
    const { state, liked } = this.props;
    return <Comments state={state} addLike={liked} />;
  }
}

const mapStateToProps = (state: AppStore): LinkStateProps => ({
  state: state.comments,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    get: bindActionCreators(getComments, dispatch),
    liked: bindActionCreators(addLike, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleContainer);
