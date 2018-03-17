import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NotificationItem from '../NotificationItem';

const Container = styled.div`
`;
const Header = styled.div`
  font-size: 32px;
  text-align: center;
  margin: 29px 0 60px 0;
  color: rgb(46, 68, 135);
`;
const GiftButton = styled.div`
  font-size: 23px;
  color: rgb(17, 17, 17);
  margin-left: 17px;
`;
const NotificationWrapper = styled.div`
  margin-top: 16px;
`;

export default function Notifications(props) {
  const {
    notifications,
    setNotificationAsDone,
  } = props;

  return (
    <Container>
      <Header>
        How to make Alice happy?
      </Header>
      <GiftButton>
        Gifts
      </GiftButton>
      {notifications.map(notification => (
        <NotificationWrapper key={notification.id}>
          <NotificationItem
            date={notification.date}
            text={notification.text}
            onDoneClick={() => setNotificationAsDone(notification.id)}
            isDone={notification.isDone}
            url={notification.url}
            type={notification.type}
          />
        </NotificationWrapper>
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
