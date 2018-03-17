import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Check from '../Icon/check';

const size = '78px';
function getMonthString(date) {
  return date.toUTCString().split(' ')[2];
}

const Container = styled.div`
  overflow: hidden;
  height: ${size};
  position: relative;
`;
const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  border: 1px solid rgba(206, 217, 241, 0.59);
  border-left: none;
  justify-content: space-between;
  transition-duration: 0.3s;
  box-sizing: border-box;
  background: #fff;
  z-index: 1;
  position: relative;
  ${props => props.opened && `
    transform: translateX(-${size});
  `}
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
const TextWrapper = styled.div`
  width: 100%;
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
const DoneButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: calc(100% - 2px);
  margin-top: 1px;
  width: ${size};
  background: #fff;
  border: none;
  ${props => props.isDone && `
    background: green;
  `}
`;

export default class NotificationItem extends PureComponent {
  constructor() {
    super();
    this.state = {
      opened: false,
    };
  }

  onItemClick() {
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    const {
      date,
      text,
      onDoneClick,
      isDone,
      type,
      url,
    } = this.props;
    const {
      opened,
    } = this.state;
    const d = new Date(date);
    const day = d.getDate();
    const year = d.getFullYear();
    const month = getMonthString(d);

    return (
      <Container>
        <ContentWrapper
          onClick={() => this.onItemClick()}
          opened={opened}
        >
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
          <TextWrapper>
            <Text>
              {text}
            </Text>
            <Type>
              {type}
            </Type>
          </TextWrapper>
          {!!url && (
            <ImageWrapper>
              <Image src={url} />
            </ImageWrapper>
          )}
        </ContentWrapper>

        <DoneButton
          isDone={isDone}
          onClick={() => !isDone && onDoneClick()}
        >
          {isDone ? <Check /> : 'Done'}
        </DoneButton>
      </Container>
    );
  }
}

NotificationItem.propTypes = {
  date: PropTypes.string.isRequired,
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
