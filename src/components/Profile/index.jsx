import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
`;

export default function Profile(props) {
  const {
    Profile,
    profile,
    // UpcomingEvents,
  } = props;

  return (

    <Container>
      
      <dl>

        <dt>Profile</dt>
        <dd>{profile}</dd>

        <dt>Id</dt>
        <dd>{Profile.id}</dd>

        <dt>Name</dt>
        <dd>{Profile.name}</dd>

        <dt>Gender</dt>
        <dd>{Profile.gender}</dd>

        <dt>Birthday</dt>
        <dd>{Profile.birthday}</dd>

        <dt>avatar</dt>
        <dd>{Profile.avatar}</dd>
      </dl>

    </Container>

  );
}

Profile.propTypes = {
  Profile: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    gender: PropTypes.string,
    // birthday: PropTypes.string,
    // avatar: "http://www.dcc-marketing.com/wp-content/uploads/2015/02/anonyme_18.jpg",
    // match: PropTypes.shape({
    //   id: PropTypes.number,
    //   name: PropTypes.string,
    //   gender: PropTypes.string,
    //   birthday: PropTypes.string,
    //   since: PropTypes.string,
    // }),
  }),
  // UpcomingEvents: PropTypes.arrayOf(PropTypes.shape({
  // }))
};

Profile.defaultProps = {
  Profile: {},
  // UpcomingEvents: [],
};
