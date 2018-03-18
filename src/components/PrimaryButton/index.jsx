import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
  font-size: 17px;
  padding: 10px 52px;
  background: #fff;
  border: solid 1px rgb(2, 27, 121);
  border-radius: 22px;
  height: 44px;
  width: 100%;
`;

export default function PrimaryButton(props) {
  const {
    children,
  } = props;

  return (
    <Container>
      {children}
    </Container>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node,
};

PrimaryButton.defaultProps = {
  children: null,
};
