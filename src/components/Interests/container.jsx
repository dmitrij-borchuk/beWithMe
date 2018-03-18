import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Component from './index';
import { getQuestionsList as getQuestionsListAction } from '../../actions/questions';

export class NotificationsContainer extends PureComponent {
  componentDidMount() {
    const {
      getQuestionsList,
    } = this.props;

    getQuestionsList(parseInt(this.props.match.params.id, 10));
  }

  render() {
    return <Component {...this.props} />;
  }
}

NotificationsContainer.propTypes = {
  getQuestionsList: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = ({ questions }) => ({
  items: questions.list,
});

const mapDispatchToProps = dispatch => ({
  getQuestionsList: id => dispatch(getQuestionsListAction(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsContainer);
