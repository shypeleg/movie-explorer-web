export interface IMovie {
  imdbid?: string;
  imdburl?: string;
  genres?: string;
  languages?: string;
  country?: string;
  votes?: string;
  series?: boolean;
  rating?: string;
  runtime?: string;
  title?: string;
  year?: string;
  type?: string;
  poster?: string;
  metascore?: string;
  plot?: string;
  rated?: string;
  director?: string;
  writer?: string;
  actors?: string;
  released?: Date;
  name?: string;
  start_year?: string;
}

export interface IVideo {
  fileName: string;
  filePath: string;
  searchableName: string;
  imdbId: string;
  searchEngineImdbLink?: string;
  imdbData?: IMovie;
  fileInfo?: {
    accessTime: Date;
    modifiedTime: Date;
  };
}
export enum Sort {
  byRecent = 'recent',
  byImdbRating = 'imdb',
}
export interface IState {
  videos: IVideo[];
  sort: Sort;
}
