import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Component from './index';
import { getProfile as getProfileAction } from '../../actions/profile';
import { getNotificationList as getNotificationListAction } from '../../actions/notifications';

export class ProfileContainer extends PureComponent {
  componentDidMount() {
    this.prepData()
  }

  componentDidUpdate() {
    this.prepData()
  }

  prepData() {
    const {
      getProfile,
      getNotifications,
    } = this.props;
    let profileId = parseInt(this.props.match.params.id);
    getNotifications(profileId);
    getProfile(profileId);
  }

  render() {
    return <Component {...this.props} />;
  }
}

ProfileContainer.propTypes = {
  getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = ({ profile }) => ({
  email: profile.email,
  name: `${profile.firstName} ${profile.lastName}`,
  gender: profile.gender,
  id: profile.id,
});
const mapDispatchToProps = dispatch => ({
  getProfile: id => dispatch(getProfileAction(id)),
  getNotifications: id => dispatch(getNotificationListAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
