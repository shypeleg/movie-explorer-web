import { videosReducer, filterReducer, sortReducer } from './reducers';
import { combineReducers } from 'redux';
import { IState } from '../types/movieExplorerTypes';

// const buildFakeReducer = defaultValue => (state = defaultValue, action) =>
//   state;

const initialState = {
  videos: videosReducer,
  sort: sortReducer,
  filter: filterReducer,
};

export const rootReducer: (
  state: IState,
  action: any,
) => IState = combineReducers<IState>(initialState);
