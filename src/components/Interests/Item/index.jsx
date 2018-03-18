import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EditIcon from '../../Icon/edit';
import DeleteIcon from '../../Icon/delete';

const size = '75px';

const Container = styled.div`
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
const Text = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-family: Nunito;
  margin: 15px;
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
const Controls = styled.div`
  padding: 25px 5px;
  display: flex;
`;
const Control = styled.div`
  margin: 0 10px;
`;

export default class NotificationItem extends PureComponent {
  constructor() {
    super();
    this.state = {
      opened: false,
    };
  }

  render() {
    const {
      text,
      url,
    } = this.props;
    const {
      opened,
    } = this.state;

    return (
      <Container>
        {!!url && (
          <ImageWrapper>
            <Image src={url} />
          </ImageWrapper>
        )}
        <ContentWrapper
          onClick={() => this.onItemClick()}
          opened={opened}
        >
          <TextWrapper>
            <Text>
              {text}
            </Text>
          </TextWrapper>
          <Controls>
            <Control>
              <EditIcon />
            </Control>
            <Control>
              <DeleteIcon />
            </Control>
          </Controls>
        </ContentWrapper>
      </Container>
    );
  }
}

NotificationItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
};

NotificationItem.defaultProps = {
  url: null,
};
