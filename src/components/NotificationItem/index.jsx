import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function getMonthString(date) {
  return date.toUTCString().split(' ')[2];
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid rgba(206, 217, 241, 0.59);
  border-left: none;
  height: 78px;
`;
const DateContainer = styled.div`
  width: 78px;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-left: 2px solid blue;
  padding: 6px 0;
`;
const Text = styled.div`
  width: 100%;
  margin: 12px 0;
  font-size: 13px;
`;
const Image = styled.img`
  height: 100%;
  border-radius: 50%;
`;
const ImageWrapper = styled.div`
  padding: 10px;
`;
const Year = styled.div`
  text-align: center;
  font-size: 12px;
  color: rgb(128, 146, 188);
`;
const Month = styled.div`
  text-align: center;
  font-size: 12px;
  color: rgb(128, 146, 188);
`;
const Day = styled.div`
  text-align: center;
  font-size: 35px;
  color: rgb(104, 81, 201);
  font-weight: bold;
  font-family: Nunito;
`;
const Type = styled.div`
  font-size: 12px;
  color: rgb(200, 53, 53);
`;
const Content = styled.div`
`;

export default function NotificationItem(props) {
  const {
    date,
    text,
    onDoneClick,
    isDone,
    type,
    url,
  } = props;
  const d = new Date(date);
  const day = d.getDate();
  const year = d.getFullYear();
  const month = getMonthString(d);

  return (
    <Container>
      <DateContainer>
        <Year>
          {year}
        </Year>
        <Day>
          {day}
        </Day>
        <Month>
          {month}
        </Month>
      </DateContainer>
      <Content>
        <Text>
          {text}
        </Text>
        <Type>
          {type}
        </Type>
      </Content>
      {!!url && (
        <ImageWrapper>
          <Image src={url} />
        </ImageWrapper>
      )}
    </Container>
  );
}

NotificationItem.propTypes = {
  date: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDoneClick: PropTypes.func.isRequired,
  isDone: PropTypes.bool,
  url: PropTypes.string,
  type: PropTypes.string,
};

NotificationItem.defaultProps = {
  isDone: false,
  url: null,
  type: null,
};
