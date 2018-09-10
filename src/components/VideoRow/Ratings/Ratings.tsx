import * as React from 'react';
import { Property } from '../Property/Property';
import * as StarRatingComponent from 'react-star-rating-component';
import { IRatings, RatingSources } from '../../../types/movieExplorerTypes';

export interface IRatingsProps {
  rating: string;
  votes: string;
  ratings: IRatings;
}

export class Ratings extends React.PureComponent<IRatingsProps> {
  render() {
    const { rating, ratings, votes } = this.props;
    let rottenRatings: string;
    if (ratings) {
      const rotten = ratings.find(rate => rate.Source === RatingSources.rotten);
      if (rotten) {
        rottenRatings = rotten.Value;
      }
    }
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
        {rottenRatings && (
          <Property
            label="Rotten Tomatoes"
            value={rottenRatings}
            dataHook="video-row-rotten-text-rating"
          />
        )}
      </div>
    );
  }
}
