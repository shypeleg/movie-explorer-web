import { filterVideos, sortVideos } from '../../actions/actions';

import { connect } from 'react-redux';
import { IState } from '../../types/movieExplorerTypes';
import { Header } from './Header';

function mapStateToProps(state: IState) {
  return {};
}
export default connect(
  mapStateToProps,
  { filterVideos, sortVideos },
)(Header);
