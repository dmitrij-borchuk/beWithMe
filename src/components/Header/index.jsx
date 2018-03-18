import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Drawer from 'react-motion-drawer';
import Menu from '../Icon/menu';
import { getTitleByUrl } from '../../utils';

const Container = styled.div`
`;
const Bar = styled.div`
  height: 32px;
  padding: 4px 15px;
`;
const PageTitle = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 0;
  position: absolute;
  left: 54px;
  right: 54px;
  top: 3px;
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: center;
`;
const NavLinkStyle = {
  display: 'block',
  padding: 9,
};
const DrawerStyle = {
  background: '#fff',
  paddingTop: 36,
};

export default function Header(props) {
  const {
    showDrawer,
    closeDrawer,
    drawerOpened,
  } = props;

  return (
    <Container>
      <Bar onClick={showDrawer}>
        <Menu />
        <PageTitle>
          {getTitleByUrl(window.location.pathname)}
        </PageTitle>
      </Bar>
      <Drawer
        open={drawerOpened}
        drawerStyle={DrawerStyle}
        onChange={isOpened => !isOpened && closeDrawer()}
      >
        <PageTitle>
          Be With Me!
        </PageTitle>
        <Link
          to="/profile/1"
          onClick={closeDrawer}
          style={NavLinkStyle}
        >
          Alice`s profile
        </Link>
        <Link
          to="/profile/2"
          onClick={closeDrawer}
          style={NavLinkStyle}
        >
          Bob`s profile
        </Link>
        <Link
          to="/notifications/2"
          onClick={closeDrawer}
          style={NavLinkStyle}
        >
          Bob`s notifications
        </Link>
        <Link
          to="/interests/1"
          onClick={closeDrawer}
          style={NavLinkStyle}
        >
          Alice`s interests
        </Link>
      </Drawer>
    </Container>
  );
}


Header.propTypes = {
  showDrawer: PropTypes.func,
  closeDrawer: PropTypes.func,
  drawerOpened: PropTypes.bool,
};

Header.defaultProps = {
  showDrawer: () => {},
  closeDrawer: () => {},
  drawerOpened: false,
};
