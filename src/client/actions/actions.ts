import { IVideo, Sort, Filter } from './../types/movieExplorerTypes';
import { api } from './../api/api';
import {
  FETCH_VIDEOS_DONE,
  SORT_VIDEOS_DONE,
  FILTER_VIDEOS_DONE,
} from './actionTypes';

export interface IFetchVideosCompletedAction {
  type: string;
  videos: IVideo[];
}

export const fetchVideos = () => {
  return async (dispatch, getState) => {
    const videos = await api.getVideos();
    dispatch(fetchVideosDone(videos));
  };
};

export const fetchVideosDone = (
  videos: IVideo[],
): IFetchVideosCompletedAction => {
  return {
    type: FETCH_VIDEOS_DONE,
    videos,
  };
};

export const sortVideos = (sort: Sort) => ({
  type: SORT_VIDEOS_DONE,
  sort,
});
export const filterVideos = (filter: Filter) => ({
  type: FILTER_VIDEOS_DONE,
  filter,
});
