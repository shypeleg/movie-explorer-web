import * as React from 'react';
import * as css from './VideoRow.scss';
import { IVideo } from '../../types/movieExplorerTypes';
import { Poster } from './Poster/Poster';
import Text from 'wix-style-react/Text';
import Heading from 'wix-style-react/Heading';

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
            <Heading size="medium" dataHook="video-row-title">
              {`${imdbData.title} (${movieyear})`}
            </Heading>
            <br />
            <Text
              size="tiny"
              weight="thin"
              secondary={true}
              dataHook="video-row-country"
            >
              {imdbData.country}
            </Text>
            <br />
            <Text
              size="tiny"
              weight="thin"
              secondary={true}
              dataHook="video-row-genre"
            >
              {imdbData.genres}
            </Text>
            <br />
            <Text
              size="tiny"
              weight="thin"
              secondary={true}
              dataHook="video-row-runtime"
            >
              {imdbData.runtime}
            </Text>
          </div>
          <div className={css.bottomLeft}>
            <div className={css.property}>
              <span className={css.label}>
                <Text
                  size="tiny"
                  weight="bold"
                  dataHook="video-row-director-label"
                >
                  Director
                </Text>
              </span>
              <span>
                <Text
                  size="tiny"
                  secondary={true}
                  dataHook="video-row-director"
                >
                  {imdbData.director}
                </Text>
              </span>
            </div>
            <div className={css.property}>
              <span className={css.label}>
                <Text
                  size="tiny"
                  weight="bold"
                  dataHook="video-row-writer-label"
                >
                  Writer
                </Text>
              </span>
              <span>
                <Text size="tiny" secondary={true} dataHook="video-row-writer">
                  {imdbData.writer}
                </Text>
              </span>
            </div>
            <div>
              <span className={css.label}>
                <Text
                  size="tiny"
                  weight="bold"
                  dataHook="video-row-stars-label"
                >
                  Stars
                </Text>
              </span>
              <span>
                <Text size="tiny" secondary={true} dataHook="video-row-stars">
                  {imdbData.actors}
                </Text>
              </span>
            </div>
          </div>
          <div className={css.topRight}>hi</div>
          <div className={css.bottomRight}>hi</div>
        </div>
      </div>
    );
  }
}
