import cliente from './cliente';

export const getLatestTweets = () => {
  const url = `api/v1/tweets`;
  return cliente.get(url);
};