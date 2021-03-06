import * as React from 'react';
import * as css from './Poster.scss';

export interface IPosterProps {
  posterUrl: string;
}

export class Poster extends React.PureComponent<IPosterProps> {
  render() {
    return (
      <div
        className={css.poster}
        data-hook="video-row-poster"
        style={{
          backgroundImage: `url(${this.props.posterUrl})`,
        }}
      />
    );
  }
}
