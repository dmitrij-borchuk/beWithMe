import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Component from './index';
import { getNotificationList as getNotificationListAction } from '../../actions/notifications';

export class NotificationsContainer extends PureComponent {
  componentDidMount() {
    const {
      getNotificationList,
    } = this.props;

    getNotificationList(parseInt(this.props.match.params.id, 10));
  }

  render() {
    return <Component {...this.props} />;
  }
}

NotificationsContainer.propTypes = {
  getNotificationList: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = ({ notifications }) => ({
  notifications: notifications.list,
});

const mapDispatchToProps = dispatch => ({
  getNotificationList: id => dispatch(getNotificationListAction(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsContainer);
