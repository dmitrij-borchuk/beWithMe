import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Notifications from '../Notifications/container';
import Profile from '../Profile/container';
// import appleTouchIcon from '../../assets/favicon/apple-touch-icon.png';
// import favicon32x32 from '../../assets/favicon/favicon-32x32.png';
// import favicon16x16 from '../../assets/favicon/favicon-16x16.png';
// import webmanifest from '../../assets/favicon/site.webmanifest';
// import safariPinnedTab from '../../assets/favicon/safari-pinned-tab.svg';
import Header from '../Header/container';
import Interests from '../Interests/container';
import manifest from '../../manifest.webmanifest';
import icon from '../../Logo Flower1.png';

const AppWrapper = styled.div`
  font-family: 'Catamaran', sans-serif;
`;
const AppContent = styled.div`
  overflow: hidden;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet>
        <link rel="manifest" href={manifest} />
        <link rel="apple-touch-icon" sizes="144x144" href={icon} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon} />
        <link rel="apple-touch-startup-image" href="/launch.png" />
        <meta name="apple-mobile-web-app-title" content="Be With Me" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="mask-icon" href={icon} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Router>
        <div>
          <Header />
          <AppContent>
            <Route path="/notifications/:id" component={Notifications} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/interests/:id" component={Interests} />
            <Redirect exact from="/" to="/profile/1" />
          </AppContent>
        </div>
      </Router>
    </AppWrapper>
  );
}
