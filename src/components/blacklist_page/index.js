import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Blacklist from './blacklist';

function mapStateToProps() {
  return {};
}
export default withRouter(connect(mapStateToProps)(Blacklist));
