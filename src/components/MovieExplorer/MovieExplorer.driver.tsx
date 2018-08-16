import * as React from 'react';
import { mount } from 'enzyme';
import testEnricher from '../../../test/helpers/testsEnricher';
//import { Chance } from 'chance';
import { IVideo } from '../../types/movieExplorerTypes';
import { MovieExplorer, IMovieExplorerProps } from './MovieExplorer';
import { aVideosBuilder } from '../../../test/builders/VideosBuilder';
//const chance = new Chance();

export class MovieExplorerDriver {
  component;
  container = document.createElement('div');
  videos: IVideo[] = aVideosBuilder()
    .given.videoCount(5)
    .build();

  cleanup() {
    this.component.detach();
  }

  buildProps = (): IMovieExplorerProps => ({
    videos: this.videos,
  });
  given = {
    // items: (items: IItem[]): WidgetDriver => {
    //   this.items = items;
    //   return this;
    // },
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
