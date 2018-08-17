import * as React from 'react';
import * as css from './Property.scss';
import Text from 'wix-style-react/Text';

export interface IPropertyProps {
  label: string;
  value: string;
  dataHook?: string;
}

export class Property extends React.PureComponent<IPropertyProps> {
  render() {
    const { label, value, dataHook } = this.props;

    return (
      <div data-hook={dataHook}>
        <span className={css.label}>
          <Text size="tiny" weight="bold" dataHook="video-property-label">
            {label}
          </Text>
        </span>
        <span>
          <Text size="tiny" secondary={true} dataHook="video-property-value">
            {value}
          </Text>
        </span>
      </div>
    );
  }
}
