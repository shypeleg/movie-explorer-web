import { IVideo, Sort, Filter } from './../types/movieExplorerTypes';
import {
  FETCH_VIDEOS_DONE,
  SORT_VIDEOS_DONE,
  FILTER_VIDEOS_DONE,
} from '../actions/actionTypes';

export const videosReducer = (state: IVideo[] = [], action): IVideo[] => {
  switch (action.type) {
    case FETCH_VIDEOS_DONE:
      const videos: IVideo[] = action.videos.filter(video => video !== null);
      return videos;
    default:
      return state;
  }
};

export const sortReducer = (state: Sort = Sort.byRecent, action): Sort => {
  switch (action.type) {
    case SORT_VIDEOS_DONE:
      return action.sort;
    default:
      return state;
  }
};

export const filterReducer = (state: Filter = Filter.movie, action): Filter => {
  switch (action.type) {
    case FILTER_VIDEOS_DONE:
      return action.filter;
    default:
      return state;
  }
};
