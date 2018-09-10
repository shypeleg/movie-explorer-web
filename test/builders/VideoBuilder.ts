import { IVideo } from './../../src/client/types/movieExplorerTypes';
import { Chance } from 'chance';

const chance = new Chance();

export class VideoBuilder {
  video: IVideo = {
    fileName: 'file' + chance.name(),
    filePath: chance.url(),
    searchableName: chance.name(),
    imdbId: chance.guid(),
    searchEngineImdbLink: null,
    imdbData: {
      imdbid: '',
      imdburl: '',
      genres: '',
      languages: '',
      country: '',
      votes: '',
      series: false,
      rating: '',
      runtime: '',
      title: '',
      year: '',
      type: '',
      poster: '',
      metascore: '',
      plot: '',
      rated: '',
      director: '',
      writer: '',
      actors: '',
      released: null,
      name: '',
    },
  };

  given = {
    filePath: (p: string) => {
      this.video.filePath = p;
      return this;
    },
    searchableName: (p: string) => {
      this.video.searchableName = p;
      return this;
    },
    imdbTitle: (p: string) => {
      this.video.imdbData.title = p;
      return this;
    },
    imdbCountry: (p: string) => {
      this.video.imdbData.country = p;
      return this;
    },
    imdbGenres: (p: string) => {
      this.video.imdbData.genres = p;
      return this;
    },
    imdbRuntime: (p: string) => {
      this.video.imdbData.runtime = p;
      return this;
    },
    imdbDirector: (p: string) => {
      this.video.imdbData.director = p;
      return this;
    },
    imdbWriter: (p: string) => {
      this.video.imdbData.writer = p;
      return this;
    },
    imdbActors: (p: string) => {
      this.video.imdbData.actors = p;
      return this;
    },
    imdbType: (p: string) => {
      this.video.imdbData.type = p;
      return this;
    },
    imdbRating: (p: string) => {
      this.video.imdbData.rating = p;
      return this;
    },
    imdbVotes: (p: string) => {
      this.video.imdbData.votes = p;
      return this;
    },
    imdbYear: (p: string) => {
      this.video.imdbData.year = p;
      return this;
    },
    imdbPoster: (p: string) => {
      this.video.imdbData.poster = p;
      return this;
    },
    imdbPlot: (p: string) => {
      this.video.imdbData.plot = p;
      return this;
    },
  };

  public build(): IVideo {
    return this.video;
  }
}

export const aVideoBuilder = () => new VideoBuilder();
