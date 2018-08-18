import * as React from 'react';
import './Root.scss';
import { Provider } from 'react-redux';
import { configureWixAxiosInstance } from '../../utils/axiosInstance';
import { configureStore } from '../../utils/configureStore';
import { IState, Sort } from '../../types/movieExplorerTypes';
import MovieExplorer from '../MovieExplorer/MovieExplorer.container';

export interface IRootProps {
  videos;
}

export class Root extends React.PureComponent<IRootProps, any> {
  private readonly store;

  constructor(props: IRootProps) {
    super(props);

    configureWixAxiosInstance({ baseURL: '/' });

    const initialState: IState = {
      videos: props.videos,
      sort: Sort.byRecent,
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
