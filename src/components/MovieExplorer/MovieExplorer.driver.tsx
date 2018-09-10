import * as React from 'react';
import { mount } from 'enzyme';
import testEnricher from '../../../test/helpers/testsEnricher';
import { IVideo } from '../../types/movieExplorerTypes';
import { MovieExplorer, IMovieExplorerProps } from './MovieExplorer';
import { aVideosBuilder } from '../../../test/builders/VideosBuilder';

export class MovieExplorerDriver {
  component;
  container = document.createElement('div');
  videos: IVideo[] = aVideosBuilder()
    .given.videoCount(5)
    .build();
  fetchVideos: () => void = () => null;

  cleanup() {
    this.component.detach();
  }

  buildProps = (): IMovieExplorerProps => ({
    videos: this.videos,
    fetchVideos: this.fetchVideos,
  });

  given = {
    fetchVideos: (fetchVideos: () => void): MovieExplorerDriver => {
      this.fetchVideos = fetchVideos;
      return this;
    },
  };

  when = {
    render: (): MovieExplorerDriver => {
      this.component = mount(
        testEnricher().build(<MovieExplorer {...this.buildProps()} />),
        { attachTo: this.container },
      );
      return this;
    },
  };
  get = {
    html: () => this.component.html(),
    byDataHook: hook => this.component.find(`[data-hook="${hook}"]`),
    header: () => this.get.byDataHook('movie-explorer-header'),
    row: () => this.get.byDataHook('movie-explorer-row'),
  };
}
