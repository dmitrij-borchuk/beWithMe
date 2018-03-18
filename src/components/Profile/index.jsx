import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MonthView } from 'react-calendar';

const Container = styled.div`
`;
const Section = styled.div`
  display: flex;
`;
const LeftSide = styled.div`
  order: 1;
  flex-grow: 1;
  width: 138px;
  position: relative;
`;
const RightSide = styled.div`
  order: 1;
  flex-grow: 2;
  padding-left: 20px;
`;
const Avatar = styled.div`
  padding: 5px 23px;
  position: relative;
  z-index: 1;
`;
const Status = styled.div`
`;
const Name = styled.div`
  color: white;
  text-align: center;
  font-size: 19px;
  padding-bottom: 6px;
`;
const Reminder = styled.div`
`;
const UpcomingEvent = styled.div`
`;
const SmallSpot = styled.div`
  display: block;
  content: "";
  background-image: url('https://cdn.zeplin.io/5aad172d341ce7da48d8604a/assets/F6BBB4F7-0C52-48A4-A608-4B91CB07E97C.png');
  width: 75px;
  height: 64px;
  position: absolute;
  right: -19px;
  top: 0;
`;
const BigSpot = styled.div`
  display: block;
  content: "";
  background-image: url('https://cdn.zeplin.io/5aad172d341ce7da48d8604a/assets/5D1B7672-508D-474E-AA6C-370B69E96FF9.png');
  width: 183px;
  height: 139px;
  position: absolute;
  left: 0;
  top: 79px;
`;

const defaultFemaleAvatarUrl = "https://cdn.zeplin.io/5aad172d341ce7da48d8604a/assets/34DB5D2E-467B-46AA-A280-5E5182618631.png";
const defaultMaleAvatarUrl = "https://app.zeplin.io/img/profileStarbucks@192w.png";
const interestsImgUrl = "https://cdn.zeplin.io/5aad172d341ce7da48d8604a/assets/BA55AC51-4395-4EE2-B2ED-026495B6E058.png";

const currentDate = new Date()

function getImgUrl(gender) {
  return gender === "male" ? defaultMaleAvatarUrl : defaultFemaleAvatarUrl
}

function getMateImgUrl(gender) {
  return gender === "male" ? defaultFemaleAvatarUrl : defaultMaleAvatarUrl
}

export default function Profile(props) {

  const {
    id,
    name,
    gender,
    birthday,
    avatar,
  } = props;

  console.log(props)

  return (
    <Container>

      <Section>

        <LeftSide>

          <Avatar>
            <img src={getImgUrl(gender)} style={{ width: 107 }}/>
          </Avatar>

          <BigSpot></BigSpot>

        </LeftSide>

        <RightSide>

          <Status>
            <div style={{
              textAlign: 'center',
              paddingTop: 18,
              color: '#1c3f90',
            }}>
              since 10/02/2018
            </div>
            <div style={{
              textAlign: 'center',
              fontSize: 25,
              color: '#1c3f90',
            }}>
              1 Year 200 Days Together
            </div>
          </Status>

          <SmallSpot></SmallSpot>

        </RightSide>

      </Section>
      <Section>

        <LeftSide style={{ zIndex: 1 }}>
          <Name>
            Alice Cooper
          </Name>
          <Avatar>
            <img src={getMateImgUrl(gender)} style={{ width: 107 / 2 }}/>
          </Avatar>
        </LeftSide>

        <RightSide>
          <Reminder>
            <b>My mother birthday</b>
            <span>10 days left</span>
          </Reminder>
          <Reminder>
            <b>100 days together</b>
            <span>10 days left</span>
          </Reminder>
        </RightSide>

      </Section>



      <hr/>

      <h3>
        Questions?
      </h3>

        <ul>
          <li>Me</li>
          <li>Alice</li>
        </ul>

        <h4>
          What is your fav cousine?
        </h4>

        <ul>
          <li>Italian</li>
          <li>Chinese</li>
          <li>French</li>
          <li>Greek</li>
          <li>Indonesian</li>
        </ul>

        <button>Next</button>

      <hr/>

      <h3>My Calendar</h3>

      <ul>
        <li>February</li>
        <li>March</li>
        <li>April</li>
      </ul>

      <MonthView
        locale="en-US"
        calendarType="ISO 8601"
        showNeighboringMonth={false}
        activeStartDate={currentDate}
      />

      <hr/>

      <UpcomingEvent>
        22
        <b>Meeting with friends</b>
        Part-time, 12 week course where you will understand users 
        problems through lorem ipsum sit amet
      </UpcomingEvent>

      <UpcomingEvent>
        30
        <b>Web &amp; Mobile App Design</b>
        Part-time, 12 week course where you will understand users 
        problems through lorem ipsum sit amet
      </UpcomingEvent>

      

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
