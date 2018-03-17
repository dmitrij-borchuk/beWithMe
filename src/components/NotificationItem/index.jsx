import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function getMonthString(date) {
  return date.toUTCString().split(' ')[2];
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  overflow: hidden;
`;
const DateContainer = styled.div`
  width: 50px;
  box-sizing: border-box;
  border-left: 3px solid black;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Text = styled.div`
  width: 100%;
`;
const DoneBtn = styled.button`
`;
const Month = styled.div`
  text-align: center;
`;
const Day = styled.div`
  text-align: center;
  font-size: 24px;
`;

export default function NotificationItem(props) {
  const {
    date,
    text,
    onDoneClick,
    isDone,
  } = props;
  const d = new Date(date);
  const day = d.getDate();
  const month = getMonthString(d);

  return (
    <Container>
      <DateContainer>
        <Month>
          {month}
        </Month>
        <Day>
          {day}
        </Day>
      </DateContainer>
      <Text>
        {text}
      </Text>
      {!isDone &&
        <DoneBtn onClick={onDoneClick}>
          Done
        </DoneBtn>
      }
    </Container>
  );
}

NotificationItem.propTypes = {
  date: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDoneClick: PropTypes.func.isRequired,
  isDone: PropTypes.bool,
};

NotificationItem.defaultProps = {
  isDone: false,
};
