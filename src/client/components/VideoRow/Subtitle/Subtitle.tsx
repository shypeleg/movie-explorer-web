import * as React from 'react';
import * as css from './Subtitle.scss';
import Text from 'wix-style-react/Text';

export interface ISubtitleProps {
  country: string;
  genres: string;
  runtime: string;
}

export class Subtitle extends React.PureComponent<ISubtitleProps> {
  render() {
    const { country, genres, runtime } = this.props;

    return (
      <div className={css.subtitle}>
        <div>
          <Text
            size="tiny"
            weight="thin"
            secondary={true}
            dataHook="video-row-country"
          >
            {country}
          </Text>
        </div>
        <div>
          <Text
            size="tiny"
            weight="thin"
            secondary={true}
            dataHook="video-row-genre"
          >
            {genres}
          </Text>
        </div>
        <div>
          <Text
            size="tiny"
            weight="thin"
            secondary={true}
            dataHook="video-row-runtime"
          >
            {runtime}
          </Text>
        </div>
      </div>
    );
  }
}
