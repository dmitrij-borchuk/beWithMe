import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NotificationItem from '../NotificationItem';

const Container = styled.div`
`;

export default function Notifications(props) {
  const {
    notifications,
    setNotificationAsDone,
  } = props;

  return (
    <Container>
      {notifications.map(notification => (
        <NotificationItem
          date={notification.date}
          text={notification.text}
          key={notification.id}
          onDoneClick={() => setNotificationAsDone(notification.id)}
          isDone={notification.isDone}
        />
      ))}
    </Container>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number,
    text: PropTypes.string,
    id: PropTypes.number,
  })),
  setNotificationAsDone: PropTypes.func,
};

Notifications.defaultProps = {
  notifications: [],
  setNotificationAsDone: () => {},
};
