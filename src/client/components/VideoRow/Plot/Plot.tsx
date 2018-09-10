import * as React from 'react';
import Text from 'wix-style-react/Text';

export interface IPlotProps {
  plot: string;
}

export class Plot extends React.PureComponent<IPlotProps> {
  render() {
    const { plot } = this.props;

    return (
      <Text size="tiny" dataHook="video-row-plot">
        {plot}
      </Text>
    );
  }
}
