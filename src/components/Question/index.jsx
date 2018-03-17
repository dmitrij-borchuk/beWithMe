import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuestionOption from '../QuestionOption';

const Container = styled.div`
`;
const QuestionHeader = styled.div`
`;

export default function Timer(props) {
  const {
    text,
    options,
  } = props;

  return (
    <Container>
      <QuestionHeader>
        {text}
      </QuestionHeader>
      {options.map(option => (
        <QuestionOption
          url={option.url}
          text={option.text}
          key={option.id}
        />
      ))}
    </Container>
  );
}

Timer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  })),
  text: PropTypes.string,
};

Timer.defaultProps = {
  options: [],
  text: '',
};
