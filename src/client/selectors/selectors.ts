import { IState, Sort, Filter, IVideo } from './../types/movieExplorerTypes';
import sortBy from 'lodash.sortby';

export const selectMovies = (state: IState): any => {
  let videos: IVideo[];
  switch (state.sort) {
    case Sort.byImdbRating:
      videos = sortBy(state.videos, 'imdbData.rating').reverse();
      break;
    default:
      videos = sortBy(state.videos, 'fileInfo.modifiedTime').reverse();
  }
  switch (state.filter) {
    case Filter.all:
      break;
    default:
      videos = videos.filter(video => video.imdbData.type === state.filter);
  }
  return videos;
};
