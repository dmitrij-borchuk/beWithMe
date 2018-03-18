import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Component from './index';
import { getProfile as getProfileAction } from '../../actions/profile';
import { getNotificationList as getNotificationListAction } from '../../actions/notifications';
import {
  getQuestionsList as getQuestionsListAction,
  getPartnerLikesList as getPartnerLikesListAction,
  setAnswer as setAnswerAction,
} from '../../actions/questions';

export class ProfileContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      id: null,
    };
  }
  componentDidMount() {
    this.prepData();
  }

  componentDidUpdate() {
    this.prepData();
  }

  prepData() {
    const {
      getProfile,
      getNotifications,
      getQuestionsList,
      getPartnerLikesList,
    } = this.props;
    const profileId = parseInt(this.props.match.params.id, 10);
    if (this.state.id !== profileId) {
      this.setState({
        id: profileId,
      });
      getNotifications(profileId);
      getQuestionsList(profileId);
      getProfile(profileId);
      getPartnerLikesList(profileId);
    }
  }

  render() {
    return <Component {...this.props} />;
  }
}

ProfileContainer.propTypes = {
  getProfile: PropTypes.func.isRequired,
  getNotifications: PropTypes.func.isRequired,
  getQuestionsList: PropTypes.func.isRequired,
  getPartnerLikesList: PropTypes.func.isRequired,
  setAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = ({ profile, questions }) => ({
  email: profile.email,
  name: `${profile.firstName} ${profile.lastName}`,
  gender: profile.gender,
  id: profile.id,
  questions: questions.list,
  partnersLikes: questions.partnersLikes,
});
const mapDispatchToProps = dispatch => ({
  getProfile: id => dispatch(getProfileAction(id)),
  getNotifications: id => dispatch(getNotificationListAction(id)),
  getQuestionsList: id => dispatch(getQuestionsListAction(id)),
  getPartnerLikesList: id => dispatch(getPartnerLikesListAction(id)),
  setAnswer: (id, data) => dispatch(setAnswerAction(id, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
