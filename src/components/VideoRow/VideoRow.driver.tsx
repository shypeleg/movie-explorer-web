import * as React from 'react';
import { mount } from 'enzyme';
import testEnricher from '../../../test/helpers/testsEnricher';
import { IVideo } from '../../types/movieExplorerTypes';
import { VideoRow, IVideoRowProps } from './VideoRow';
import { aVideoBuilder } from '../../../test/builders/VideoBuilder';
import { textTestkitFactory } from 'wix-style-react/dist/testkit/enzyme';

export class VideoRowDriver {
  component;
  container = document.createElement('div');
  video: IVideo = aVideoBuilder().build();

  cleanup() {
    this.component.detach();
  }

  buildProps = (): IVideoRowProps => ({
    video: this.video,
  });
  given = {
    video: (video: IVideo): VideoRowDriver => {
      this.video = video;
      return this;
    },
  };

  when = {
    render: (): VideoRowDriver => {
      this.component = mount(
        testEnricher().build(<VideoRow {...this.buildProps()} />),
        { attachTo: this.container },
      );
      return this;
    },
  };
  get = {
    html: () => this.component.html(),
    byDataHook: hook => this.component.find(`[data-hook="${hook}"]`),
    poster: () => this.get.byDataHook('video-row-poster'),
    title: () =>
      textTestkitFactory({
        wrapper: this.component,
        dataHook: 'video-row-title',
      }),
    country: () =>
      textTestkitFactory({
        wrapper: this.component,
        dataHook: 'video-row-country',
      }),
    plot: () =>
      textTestkitFactory({
        wrapper: this.component,
        dataHook: 'video-row-plot',
      }),
    genre: () =>
      textTestkitFactory({
        wrapper: this.component,
        dataHook: 'video-row-genre',
      }),
    runtime: () =>
      textTestkitFactory({
        wrapper: this.component,
        dataHook: 'video-row-runtime',
      }),

    stars: () => this.get.byDataHook('video-row-stars'),
    writer: () => this.get.byDataHook('video-row-writer'),
    director: () => this.get.byDataHook('video-row-director'),
    ratings: () => this.get.byDataHook('video-row-imdb-text-rating'),
  };
}
