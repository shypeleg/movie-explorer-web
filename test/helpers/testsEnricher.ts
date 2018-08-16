import { IState } from './../../src/types/movieExplorerTypes';
import { FakeInMemoryStrategy } from './../../src/utils/storageManager/FakeInMemoryStrategy';
import ComponentWrapper from 'react-test-wrappers/dist/src/componentWrapper';
import reduxWrapper from 'react-test-wrappers/dist/src/wrappers/redux';
import { configureStore } from '../../src/utils/configureStore';

export default function(initialState: IState = null) {
  const store = configureStore(initialState || {}, FakeInMemoryStrategy);
  return new ComponentWrapper().wrapWith(reduxWrapper(store));
}
