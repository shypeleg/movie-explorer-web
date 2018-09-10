import * as React from 'react';
import Heading from 'wix-style-react/Heading';

export interface ITitleProps {
  title: string;
  movieYear: string;
  backupName: string;
}

export class Title extends React.PureComponent<ITitleProps> {
  render() {
    const { title, movieYear, backupName } = this.props;
    const displayedTitle = title ? `${title} (${movieYear})` : backupName;

    return (
      <Heading appearance="H1" dataHook="video-row-title">
        {displayedTitle}
      </Heading>
    );
  }
}
