import React from 'react';
import styled from 'styled-components';

const size = '75px';

const Container = styled.div`
  height: ${size};
  position: relative;
  line-height: ${size};
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
  box-shadow: 0px 0px 20px #ccc;
  ${props => props.opened && `
    transform: translateX(-${size});
  `}
`;
const Text = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: Nunito;
  margin-left: 60px;
  color: rgb(92, 109, 150);
`;
const TextWrapper = styled.div`
  width: 100%;
`;
const NumberContainer = styled.div`
  font-size: 35px;
  color: rgb(220, 2, 70);
  margin-left: 20px;
`;

export default function NotificationItem() {
  return (
    <Container>
      <ContentWrapper>
        <NumberContainer>
          9
        </NumberContainer>
        <TextWrapper>
          <Text>
            PERIOD STARTS
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  );
}

NotificationItem.propTypes = {
};

NotificationItem.defaultProps = {
};
