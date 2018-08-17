import * as React from 'react';
import * as css from './VideoRow.scss';
import { IVideo } from '../../types/movieExplorerTypes';
import { Poster } from './Poster/Poster';
import Text from 'wix-style-react/Text';
import { Title } from './Title/Title';
import { Subtitle } from './Subtitle/Subtitle';
import { Plot } from './Plot/Plot';
import { Property } from './Property/Property';

export interface IVideoRowProps {
  video: IVideo;
}

export class VideoRow extends React.PureComponent<IVideoRowProps> {
  render() {
    const { video } = this.props;
    const imdbData = video.imdbData;
    const movieyear = imdbData.year || imdbData.start_year;

    return (
      <div className={css.row} data-hook="movie-explorer-row">
        <Poster posterUrl={imdbData.poster} />
        <div className={css.details}>
          <div className={css.topLeft}>
            <Title title={imdbData.title} movieYear={movieyear} />
            <Subtitle
              country={imdbData.country}
              genres={imdbData.genres}
              runtime={imdbData.runtime}
            />
            <Plot plot={imdbData.plot} />
          </div>
          <div className={css.bottomLeft}>
            <Property
              label="Director"
              value={imdbData.director}
              dataHook="video-row-director"
            />
            <Property
              label="Writer"
              value={imdbData.writer}
              dataHook="video-row-writer"
            />
            <Property
              label="Stars"
              value={imdbData.actors}
              dataHook="video-row-stars"
            />
          </div>
          <div className={css.topRight}>hi</div>
          <div className={css.bottomRight}>hi</div>
        </div>
      </div>
    );
  }
}
