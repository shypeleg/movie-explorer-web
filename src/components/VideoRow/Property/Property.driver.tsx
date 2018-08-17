import * as React from 'react';
import { mount } from 'enzyme';
import testEnricher from '../../../../test/helpers/testsEnricher';
import { Property, IPropertyProps } from './Property';
import { textTestkitFactory } from 'wix-style-react/dist/testkit/enzyme';

export class PropertyDriver {
  component;
  container = document.createElement('div');
  label: string;
  value: string;
  datahook: string;

  cleanup() {
    this.component.detach();
  }

  buildProps = (): IPropertyProps => ({
    label: this.label,
    value: this.value,
    dataHook: this.datahook,
  });
  given = {
    label: (label: string): PropertyDriver => {
      this.label = label;
      return this;
    },
    value: (value: string): PropertyDriver => {
      this.value = value;
      return this;
    },
    dataHook: (datahook: string): PropertyDriver => {
      this.datahook = datahook;
      return this;
    },
  };

  when = {
    render: (): PropertyDriver => {
      this.component = mount(
        testEnricher().build(<Property {...this.buildProps()} />),
        { attachTo: this.container },
      );
      return this;
    },
  };
  get = {
    html: () => this.component.html(),
    byDataHook: hook => this.component.find(`[data-hook="${hook}"]`),
    label: () =>
      textTestkitFactory({
        wrapper: this.component,
        dataHook: 'video-property-label',
      }),
    value: () =>
      textTestkitFactory({
        wrapper: this.component,
        dataHook: 'video-property-value',
      }),
    datahook: datahook => this.get.byDataHook(datahook),
  };
}
