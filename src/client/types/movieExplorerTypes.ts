export interface IMovie {
  imdbid?: string;
  imdburl?: string;
  genres?: string;
  languages?: string;
  country?: string;
  votes?: string;
  series?: boolean;
  rating?: string;
  ratings?: IRatings;
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
export type IRatings = [
  {
    Source: RatingSources;
    Value: string;
  }
];

export enum RatingSources {
  imdb = 'Internet Movie Database',
  rotten = 'Rotten Tomatoes',
  metacritic = 'Metacritic',
}
export enum Sort {
  byRecent = 'recent',
  byImdbRating = 'imdb',
}

export enum Filter {
  movie = 'movie',
  series = 'series',
  all = 'all',
}
export interface IState {
  videos: IVideo[];
  sort: Sort;
  filter: Filter;
}
