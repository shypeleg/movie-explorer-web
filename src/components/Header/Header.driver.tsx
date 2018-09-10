import * as React from 'react';
import { mount } from 'enzyme';
import testEnricher from '../../../test/helpers/testsEnricher';
import { Filter, Sort } from '../../types/movieExplorerTypes';
import { Header, IHeaderProps } from './Header';

export class HeaderDriver {
  component;
  container = document.createElement('div');

  filterVideos: (filter: Filter) => void = () => null;
  sortVideos: (sort: Sort) => void = () => null;

  cleanup() {
    this.component.detach();
  }

  buildProps = (): IHeaderProps => ({
    filterVideos: this.filterVideos,
    sortVideos: this.sortVideos,
  });

  given = {
    // bla: (fetchVideos: () => void): HeaderDriver => {
    //   this.fetchVideos = fetchVideos;
    //   return this;
    // },
  };

  when = {
    render: (): HeaderDriver => {
      this.component = mount(
        testEnricher().build(<Header {...this.buildProps()} />),
        { attachTo: this.container },
      );
      return this;
    },
  };
  get = {
    html: () => this.component.html(),
    byDataHook: hook => this.component.find(`[data-hook="${hook}"]`),
    header: () => this.get.byDataHook('movie-explorer-header'),
  };
}
