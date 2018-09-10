import { IState } from './../../src/client/types/movieExplorerTypes';
import ComponentWrapper from 'react-test-wrappers/dist/src/componentWrapper';
import reduxWrapper from 'react-test-wrappers/dist/src/wrappers/redux';
import { configureStore } from '../../src/client/utils/configureStore';

export default function(initialState: IState = null) {
  const store = configureStore(initialState || {});
  return new ComponentWrapper().wrapWith(reduxWrapper(store));
}
