import { IVideo } from './../types/movieExplorerTypes';
import { axiosInstance } from '../utils/axiosInstance';

export const api = {
  getVideos(): Promise<IVideo[]> {
    return axiosInstance
      .get(`/_api/videos`)
      .then(response => response.data.videos)
      .catch(exception => {
        /* tslint:disable */
        console.error('could not fetch videos, error description: ', exception);
        /* tslint:enable */
        return [];
      });
  },
};
