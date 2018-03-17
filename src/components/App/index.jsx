import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Notifications from '../Notifications/container';
import Header from '../Header/container';
import manifest from '../../manifest.webmanifest';
import icon from '../../Asset 1@2x-8.png';

const AppWrapper = styled.div`
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
          <Route path="/notifications" component={Notifications} />
        </div>
      </Router>
    </AppWrapper>
  );
}
