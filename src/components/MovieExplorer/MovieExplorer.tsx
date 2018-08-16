import * as React from 'react';
import * as css from './MovieExplorer.scss';
import { IVideo } from '../../types/movieExplorerTypes';
import { Header } from '../Header/Header';
import { VideoRow } from '../VideoRow/VideoRow';

export interface IMovieExplorerProps {
  videos: IVideo[];
}

export class MovieExplorer extends React.PureComponent<IMovieExplorerProps> {
  render() {
    const { videos } = this.props;

    const Videos = this.props.videos.map(video => (
      <VideoRow key={video.filePath} video={video} />
    ));

    return (
      <div className={css.container}>
        <Header videos={videos} />
        <div className={css.videos}>{Videos}</div>
      </div>
    );
  }
}
