import { IState } from './../types/movieExplorerTypes';

export const selectMovies = (state: IState): any => {
  return state.videos;
};
