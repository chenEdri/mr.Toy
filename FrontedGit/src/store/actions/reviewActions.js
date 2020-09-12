import {reviewService} from '../../services/reviewService';

export function loadReviews(filterBy) {
  return async dispatch => {
    try {
      const reviews = await reviewService.query(filterBy);
      dispatch({ type: 'SET_REVIEWS', reviews });

    } catch (err) {
      console.log('ReviewActions: err in loadReviews', err);
    }
  };
}

export function addReview(review) {
  return async dispatch => {
    try {
      const addedReview = await reviewService.add(review);
      dispatch({ type: 'REVIEW_ADD', review });
    } catch (err) {
      console.log('ReviewActions: err in addReview', err);
    }
  };
}
