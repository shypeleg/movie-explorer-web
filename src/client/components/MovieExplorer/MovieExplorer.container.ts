import { selectMovies } from './../../selectors/selectors';
import { fetchVideos } from '../../actions/actions';

import { connect } from 'react-redux';
import { IState } from '../../types/movieExplorerTypes';
import { MovieExplorer } from './MovieExplorer';

function mapStateToProps(state: IState) {
  return {
    videos: selectMovies(state),
  };
}
export default connect(
  mapStateToProps,
  { fetchVideos },
)(MovieExplorer);
