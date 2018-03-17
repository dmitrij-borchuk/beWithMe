import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Drawer from 'react-motion-drawer';
import Menu from '../Icon/menu';

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
}
const DrawerStyle = {
  background: '#fff',
  paddingTop: 36,
}

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
          Page Title
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
          to="/notifications"
          onClick={closeDrawer}
          style={NavLinkStyle}
        >
          Notifications
        </Link>
        <Link
          to="/profile"
          onClick={closeDrawer}
          style={NavLinkStyle}
        >
          Profile
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
