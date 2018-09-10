import * as React from 'react';
import * as css from './Header.scss';
import { Filter, Sort } from '../../types/movieExplorerTypes';

export interface IHeaderProps {
  filterVideos(filter: Filter);
  sortVideos(sort: Sort);
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
