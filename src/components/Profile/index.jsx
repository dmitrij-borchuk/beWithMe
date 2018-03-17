import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
`;

export default function Profile(props) {
  const {
    profile,
    // UpcomingEvents,
  } = props;

  return (

    <Container>
      
      <dl>

        <dt>Profile</dt>
        <dd>{JSON.stringify(profile)}</dd>

        <dt>Id</dt>
        <dd>{profile.id}</dd>

        <dt>Name</dt>
        <dd>{profile.name}</dd>

        <dt>Gender</dt>
        <dd>{profile.gender}</dd>

        <dt>Birthday</dt>
        <dd>{profile.birthday}</dd>

        <dt>avatar</dt>
        <dd>{profile.avatar}</dd>
      </dl>

    </Container>

  );
}

Profile.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    gender: PropTypes.string,
    birthday: PropTypes.string,
    avatar: PropTypes.string,
    match: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      gender: PropTypes.string,
      birthday: PropTypes.string,
      since: PropTypes.string,
    }),
  }),
  // UpcomingEvents: PropTypes.arrayOf(PropTypes.shape({
  // }))
};

Profile.defaultProps = {
  profile: {},
  // UpcomingEvents: [],
};
