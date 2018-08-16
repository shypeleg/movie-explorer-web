import * as React from 'react';
import * as css from './Header.scss';
import { IVideo } from '../../types/movieExplorerTypes';

export interface IHeaderProps {
  videos: IVideo[];
}

export class Header extends React.PureComponent<IHeaderProps> {
  render() {
    return (
      <div className={css.container} data-hook="movie-explorer-header">
        THIS IS A HEADER. HEADING EVERYTHING. LEADING
      </div>
    );
  }
}
