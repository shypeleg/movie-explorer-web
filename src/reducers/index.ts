import { combineReducers } from 'redux';
import { IState, Sort } from '../types/movieExplorerTypes';

const buildFakeReducer = defaultValue => (state = defaultValue, action) =>
  state;

const initialState = {
  videos: buildFakeReducer({}),
  sort: buildFakeReducer(Sort.byRecent),
};

export const rootReducer: (
  state: IState,
  action: any,
) => IState = combineReducers<IState>(initialState);
