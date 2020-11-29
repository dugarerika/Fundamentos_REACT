import cliente from './cliente';

export const getLatestTweets = () => {
  const url = `/api/v1/tweets?_expand=user&_embed=likes&_sort=createdAt&_order=desc`;
  return cliente.get(url);
};