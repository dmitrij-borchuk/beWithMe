import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const DateContainer = styled.div`
  display: inline-block;
  border-left: 3px solid black;
`;
const Text = styled.div`
  display: inline-block;
`;
const DoneBtn = styled.button`
  display: inline-block;
`;

export default function NotificationItem(props) {
  const {
    date,
    text,
    onDoneClick,
    isDone,
  } = props;
  const d = new Date(date);
  const day = d.getDay();
  const localizedDate = (new Date(date)).toLocaleDateString();

  return (
    <Container>
      <DateContainer>
        {day}
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
