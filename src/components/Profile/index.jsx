import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
`;

export default function Profile(props) {
  const {
    id,
    name,
    gender,
    birthday,
    avatar,
  } = props;

  return (
    <Container>
      <dl>

        <dt>Profile</dt>

        <dt>Id</dt>
        <dd>{id}</dd>

        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>Gender</dt>
        <dd>{gender}</dd>

        <dt>Birthday</dt>
        <dd>{birthday}</dd>

        <dt>avatar</dt>
        <dd>{avatar}</dd>
      </dl>

    </Container>

  );
}

Profile.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  gender: PropTypes.string,
  birthday: PropTypes.string,
  avatar: PropTypes.string,
  // match: PropTypes.shape({
  //   id: PropTypes.number,
  //   name: PropTypes.string,
  //   gender: PropTypes.string,
  //   birthday: PropTypes.string,
  //   since: PropTypes.string,
  // }),
};

Profile.defaultProps = {
  id: null,
  name: null,
  gender: null,
  birthday: null,
  avatar: null,
};
