import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import headerBgImage from '../../assets/group4@3x.png';


const Header = styled.div`
  font-size: 24px;
  text-align: center;
  padding: 29px 0 60px 0;
  color: rgb(46, 68, 135);
  background: url(${headerBgImage});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default function HeroWithText(props) {
  const {
    text,
  } = props;

  return (
    <Header>
      {text}
    </Header>
  );
}


HeroWithText.propTypes = {
  text: PropTypes.string,
};

HeroWithText.defaultProps = {
  text: '',
};
