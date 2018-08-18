import * as React from 'react';
import { Property } from '../Property/Property';
import * as StarRatingComponent from 'react-star-rating-component';

export interface IRatingsProps {
  rating: string;
  votes: string;
}

export class Ratings extends React.PureComponent<IRatingsProps> {
  render() {
    const { rating, votes } = this.props;
    return (
      <div>
        <StarRatingComponent
          name="rating_stars"
          starCount={10}
          value={Number(rating)}
        />
        <Property
          label="IMDb"
          value={`${rating} (${votes} votes)`}
          dataHook="video-row-imdb-text-rating"
        />
      </div>
    );
  }
}
