import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Component from './index';
import { getProfile as getProfileAction } from '../../actions/profile';

export class ProfileContainer extends PureComponent {
  componentDidMount() {
    const {
      getProfile,
    } = this.props;

    getProfile(1);
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
  getProfile: () => dispatch(getProfileAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);