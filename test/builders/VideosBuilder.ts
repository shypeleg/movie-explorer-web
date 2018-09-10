import { aVideoBuilder } from './VideoBuilder';
import { IVideo } from './../../src/client/types/movieExplorerTypes';

export class VideosBuilder {
  videos: IVideo[];

  given = {
    videoCount: (count: number) => {
      this.videos = Array.from(Array(count).keys()).map((i, index) =>
        aVideoBuilder().build(),
      );

      return this;
    },
  };

  public build(): IVideo[] {
    return this.videos;
  }
}

export const aVideosBuilder = () => new VideosBuilder();
