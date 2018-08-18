import { IState, Sort } from './../types/movieExplorerTypes';
import sortBy from 'lodash.sortby';

export const selectMovies = (state: IState): any => {
  switch (state.sort) {
    case Sort.byImdbRating:
      return sortBy(state.videos, 'imdbData.rating').reverse();
    default:
      return sortBy(state.videos, 'fileInfo.modifiedTime').reverse();
  }
};
