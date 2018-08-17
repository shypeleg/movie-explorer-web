import * as React from 'react';
import Heading from 'wix-style-react/Heading';

export interface ITitleProps {
  title: string;
  movieYear: string;
}

export class Title extends React.PureComponent<ITitleProps> {
  render() {
    const { title, movieYear } = this.props;

    return (
      <Heading appearance="H1" dataHook="video-row-title">
        {`${title} (${movieYear})`}
      </Heading>
    );
  }
}
