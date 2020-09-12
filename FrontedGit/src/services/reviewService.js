import httpService from './httpService';

export const reviewService = {
  add,
  query,
  remove
};


// return axios.get('api/toy/?id=1223&balance=13');
// return axios.get('api/toy/?', {params: {id: 1223, balanse:13}});


function query(filterBy) {
  if (filterBy) var queryStr = `?name=${filterBy.name}`;
  return httpService.get(`review${queryStr || ''}`);
}

function remove(reviewId) {
  return httpService.delete(`review/${reviewId}`);
}
async function add(review) {
  const addedReview  = await httpService.post(`review`, review);
  return  addedReview
}
