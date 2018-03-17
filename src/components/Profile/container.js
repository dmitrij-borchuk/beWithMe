import { connect } from 'react-redux';
import component from './index';

const mapStateToProps = ({ profile }) => ({
  profile: profile,
});

export default connect(
  mapStateToProps,
)(component);
