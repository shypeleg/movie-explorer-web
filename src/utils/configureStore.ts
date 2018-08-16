import { Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as createLogger from 'redux-logger';
import { rootReducer } from './../reducers';
import { IState } from '../types/movieExplorerTypes';
import { StorageManager } from '../utils/storageManager/StorageManager';
import { WixStorageStrategy } from 'data-capsule';

export const configureStore = (
  initialState,
  storageStrategy = WixStorageStrategy,
): Store<IState> => {
  const storageManager = new StorageManager(storageStrategy);
  const middleware = initialState.debug
    ? [thunk.withExtraArgument(storageManager), createLogger()]
    : [thunk.withExtraArgument(storageManager)];
  return createStore<IState>(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );
};
