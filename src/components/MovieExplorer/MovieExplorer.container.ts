import { selectMovies } from './../../selectors/selectors';

import { connect } from 'react-redux';
import { IState } from '../../types/movieExplorerTypes';
import { MovieExplorer } from './MovieExplorer';

function mapStateToProps(state: IState) {
  return {
    videos: selectMovies(state),
  };
}
export default connect(mapStateToProps)(MovieExplorer);
