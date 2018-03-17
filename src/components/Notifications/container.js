import { connect } from 'react-redux';
import component from './index';

const mapStateToProps = ({ notifications }) => ({
  notifications: notifications.list,
});

export default connect(
  mapStateToProps,
)(component);
