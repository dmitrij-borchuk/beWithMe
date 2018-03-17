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
      </Bar>
      <Drawer
        open={drawerOpened}
        drawerStyle={{ background: '#fff' }}
        onChange={isOpened => !isOpened && closeDrawer()}
      >
        <div>
          <Link
            to="/profile"
            onClick={closeDrawer}
          >
            Profile
          </Link>
        </div>
        <div>
          <Link
            to="/notifications"
            onClick={closeDrawer}
          >
            Notifications
          </Link>
        </div>
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
