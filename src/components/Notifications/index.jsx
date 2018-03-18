import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NotificationItem from '../NotificationItem';
import giftImage from '../../assets/gift@3x.png';
import headerBgImage from '../../assets/group4@3x.png';

const Container = styled.div`
`;
const Header = styled.div`
  font-size: 24px;
  text-align: center;
  padding: 29px 0 60px 0;
  color: rgb(46, 68, 135);
  background: url(${headerBgImage});
  background-size: 100%;
  background-repeat: no-repeat;
`;
const Category = styled.div`
  font-size: 23px;
  color: rgb(17, 17, 17);
  margin: 10px 17px;
`;
const NotificationWrapper = styled.div`
  margin-top: 16px;
`;
const GiftImage = styled.img`
  width: 30px;
  vertical-align: text-top;
`;
const CategoryText = styled.span`
  font-weight: bold;
  margin-left: 11px;
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
      <Category>
        <GiftImage src={giftImage} />
        <CategoryText>
          Gifts
        </CategoryText>
      </Category>
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
    date: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.number,
  })),
  setNotificationAsDone: PropTypes.func,
};

Notifications.defaultProps = {
  notifications: [],
  setNotificationAsDone: () => {},
};
