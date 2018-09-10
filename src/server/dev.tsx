import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as css from './dev.scss';
import { Root } from '../../src/client/components/Root/Root';

ReactDOM.render(
  <div className={css.background}>
    <Root />
  </div>,
  document.getElementById('root'),
);
