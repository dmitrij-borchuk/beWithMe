import { connect } from 'react-redux';
import component from './index';
import { showDrawer, closeDrawer } from '../../actions/drawer';

const mapStateToProps = ({ drawer }) => ({
  drawerOpened: drawer.open,
});

const mapDispatchToProps = dispatch => ({
  showDrawer: () => dispatch(showDrawer()),
  closeDrawer: () => dispatch(closeDrawer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);
