import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Notifications from '../Notifications/container';
// import appleTouchIcon from '../../assets/favicon/apple-touch-icon.png';
// import favicon32x32 from '../../assets/favicon/favicon-32x32.png';
// import favicon16x16 from '../../assets/favicon/favicon-16x16.png';
// import webmanifest from '../../assets/favicon/site.webmanifest';
// import safariPinnedTab from '../../assets/favicon/safari-pinned-tab.svg';
import manifest from '../../manifest.webmanifest';

const AppWrapper = styled.div`
`;

// {/* <link rel="apple-touch-icon" sizes="144x144" href={appleTouchIcon} />
// <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
// <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
// <link rel="manifest" href={webmanifest} />
// <link rel="mask-icon" href={safariPinnedTab} color="#5bbad5" />
// <meta name="msapplication-TileColor" content="#da532c" />
// <meta name="theme-color" content="#ffffff" /> */}
export default function App() {
  return (
    <AppWrapper>
      <Helmet>
        <link rel="manifest" href={manifest} />
      </Helmet>
      <Router>
        <div>
          <Route path="/notifications" component={Notifications} />
          <Link to="/notifications">Notifications</Link>
        </div>
      </Router>
    </AppWrapper>
  );
}
