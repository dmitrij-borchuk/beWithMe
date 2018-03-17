import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
`;
const Image = styled.img`
`;
const Text = styled.div`
`;

export default function QuestionOption(props) {
  const {
    url,
    text,
  } = props;

  return (
    <Container>
      <Image src={url} />
      <Text>
        {text}
      </Text>
    </Container>
  );
}

QuestionOption.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
};

QuestionOption.defaultProps = {
  url: null,
  text: '',
};
