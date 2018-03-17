import { connect } from 'react-redux';
import component from './index';

const mapStateToProps = ({ questions }) => ({
  text: questions.list[0].text,
  options: questions.list[0].options,
});

export default connect(
  mapStateToProps,
)(component);
