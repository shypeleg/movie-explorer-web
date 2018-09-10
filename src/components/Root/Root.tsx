import * as React from 'react';
import './Root.scss';
import { Provider } from 'react-redux';
import { configureWixAxiosInstance } from '../../utils/axiosInstance';
import { configureStore } from '../../utils/configureStore';
import { IState, Sort, Filter } from '../../types/movieExplorerTypes';
import MovieExplorer from '../MovieExplorer/MovieExplorer.container';

export class Root extends React.PureComponent {
  private readonly store;

  constructor(props) {
    super(props);

    configureWixAxiosInstance({ baseURL: '/' });

    const initialState: IState = {
      videos: [],
      sort: Sort.byRecent,
      filter: Filter.movie,
    };

    this.store = configureStore(initialState);
  }

  render() {
    return (
      <Provider store={this.store}>
        <MovieExplorer />
      </Provider>
    );
  }
}
