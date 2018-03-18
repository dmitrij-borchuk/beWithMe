import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { css } from 'styled-components';
import { MonthView } from 'react-calendar';
import NotificationItem from '../NotificationItem';

const Container = styled.div`
`;
const Section = styled.div`
  display: flex;
`;
const SectionBlock = styled.div`
  display: block;
`;
const LeftSide = styled.div`
  order: 1;
  flex-grow: 1;
  min-width: 158px;
  max-width: 158px;
  position: relative;
`;
const RightSide = styled.div`
  order: 1;
  flex-grow: 2;
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
  font-weight: bold;
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
  right: 0;
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

const InnerNavigation = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
`;
const InnerNavigationItem = styled.div`
  order: 1;
  flex-grow: 1;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  border-bottom: 3px solid transparent;
`;
const cssInnerNavigationItem = {
  borderColor: 'rgb(104,81,201)',
};

const Question = styled.div`
  display: flex;
  overflow: auto;
  position: relative;
  flex-wrap: nowrap;
  overflow-y: hidden;
  margin-bottom: 29px;
`;
const QuestionOption = styled.div`
  order: 1;
  min-width: 85px;
  text-align: center;
`;
const OptionLabel = styled.div`
  font-size: 12px;
  margin-top: 2px;
`;
const NextQuestion = styled.button`
  background-color: rgb(28, 63, 144);
  color: white;
  border: none;
  padding: 13px;
  min-width: 230px;
  display: block;
  margin: auto;
  font-size: 16px;
  border-radius: 21px;
`;

const Months = styled.div`
  display: flex;
  margin: auto;
  width: 225px;
`;
const cssMonth = css`
  text-align: center;
  width: 33%;
  flex-grow: 1;
  vertical-align: middle;
  line-height: 20px;
`;
const Month = styled.div`
  ${cssMonth}
  font-size: 12px;
`;
const CurrentMonth = styled.div`
  ${cssMonth}
  color: orange;
  font-size: 18px;
  font-weight: bold;
`;

const defaultFemaleAvatarUrl = "https://cdn.zeplin.io/5aad172d341ce7da48d8604a/assets/34DB5D2E-467B-46AA-A280-5E5182618631.png";
const defaultMaleAvatarUrl = "https://app.zeplin.io/img/profileStarbucks@192w.png";
const interestsImgUrl = "https://cdn.zeplin.io/5aad172d341ce7da48d8604a/assets/BA55AC51-4395-4EE2-B2ED-026495B6E058.png";
const foodImageUrl = "https://cdn.zeplin.io/5aad172d341ce7da48d8604a/assets/F561200C-6F7F-4C88-9B1D-F037F0E3CAB1.png";

const currentDate = new Date();

const NotificationWrapper = styled.div``;
const notifications = [
  {
    id: 1,
    date: (new Date()).toString(),
    text: "Mother's birthday",
    type: "Type?",
    isDone: false,
  },
  {
    id: 2,
    date: (new Date()).toString(),
    text: "2 Years Anniversary",
    type: "Type?",
    isDone: false,
  }
]

function getImgUrl(gender) {
  return gender === "male" ? defaultMaleAvatarUrl : defaultFemaleAvatarUrl
}

function getMateImgUrl(gender) {
  return gender === "male" ? defaultFemaleAvatarUrl : defaultMaleAvatarUrl
}

function renderNotifications({compact} = {}) {
  return (
    <div>
      {notifications.map(notification => (
        <NotificationWrapper key={notification.id} style={{
          marginLeft: compact ? 33 : 0,
          marginBottom: compact ? 0 : 10,
        }}>
          <NotificationItem
            date={notification.date}
            text={notification.text}
            onDoneClick={() => setNotificationAsDone(notification.id)}
            isDone={notification.isDone}
            url={notification.url}
            compact={compact}
          />
        </NotificationWrapper>
      ))}
    </div>
  )
}

function calendarTileClass({date, view}) {
  let re = ['calendar-common-tile']
  let day = date.getDate();
  let currentDay = currentDate.getDate();
  if (day === currentDay) {
    re.push('calendar-todays-tile')
  }
  return re
}

function selectedDate(date, view) {
  // has problem by fixing selected date...
  console.log(date)
}

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

        <RightSide style={{
          marginTop: -7,
        }}>
          {renderNotifications({compact: true})}
        </RightSide>

      </Section>

      <Section>
        <InnerNavigation>
          <InnerNavigationItem style={cssInnerNavigationItem}>
            Me
          </InnerNavigationItem>
          <InnerNavigationItem>
            Alice
          </InnerNavigationItem>
        </InnerNavigation>
      </Section>

      <SectionBlock>
        <h4 style={{
          padding: '0 16px',
          margin: '21px 0 17px 0',
        }}>
          What is your fav cousine?
        </h4>

        <Question>
          <QuestionOption>
            <img src={foodImageUrl} alt=""/>
            <OptionLabel>
              Italian
            </OptionLabel>
          </QuestionOption>
          <QuestionOption>
            <img src={foodImageUrl} alt=""/>
            <OptionLabel>
              Chinese
            </OptionLabel>
          </QuestionOption>
          <QuestionOption>
            <img src={foodImageUrl} alt=""/>
            <OptionLabel>
              French
            </OptionLabel>
          </QuestionOption>
          <QuestionOption>
            <img src={foodImageUrl} alt=""/>
            <OptionLabel>
              Greek
            </OptionLabel>
          </QuestionOption>
          <QuestionOption>
            <img src={foodImageUrl} alt=""/>
            <OptionLabel>
              Indonesian
            </OptionLabel>
          </QuestionOption>
        </Question>

        <NextQuestion>Next</NextQuestion>
      </SectionBlock>

      <SectionBlock>
        <h3 style={{
          marginTop: 37,
          borderTop: '1px solid rgb(28,63,144)',
          paddingTop: 25,
          textAlign: 'center',
          color: 'rgb(28,63,144)',
          fontSize: 24,
        }}>My Calendar</h3>

        <Months>
          <Month>February</Month>
          <CurrentMonth>February</CurrentMonth>
          <Month>April</Month>
        </Months>

        <div style={{
          margin: '31px auto',
          width: 370,
        }}>
          <MonthView
            locale="en-US"
            calendarType="ISO 8601"
            showNeighboringMonth={false}
            activeStartDate={currentDate}
            tileClassName={calendarTileClass}
            onClick={selectedDate}
          />
        </div>

      </SectionBlock>

      <SectionBlock>
        {renderNotifications()}
      </SectionBlock>

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
