import * as React from 'react';
import * as css from './MovieExplorer.scss';
import { IVideo } from '../../types/movieExplorerTypes';
import Header from '../Header/Header.container';
import { VideoRow } from '../VideoRow/VideoRow';

export interface IMovieExplorerProps {
  videos: IVideo[];
  fetchVideos(): void;
}

export class MovieExplorer extends React.PureComponent<IMovieExplorerProps> {
  componentWillMount() {
    this.props.fetchVideos();
  }
  render() {
    const { videos } = this.props;
    if (!videos || videos.length < 1) {
      return null;
    }
    const Videos = videos.map(video => {
      return <VideoRow key={video.filePath} video={video} />;
    });

    return (
      <div className={css.container}>
        <Header videos={videos} />
        <div className={css.videos}>{Videos}</div>
      </div>
    );
  }
}
