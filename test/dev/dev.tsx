import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as css from './dev.scss';
import { Root } from '../../src/components/Root/Root';

const videos = JSON.parse(atob(window.__VIDEOS__));
ReactDOM.render(
  <div className={css.background}>
    <Root videos={videos} />
  </div>,
  document.getElementById('root'),
);
