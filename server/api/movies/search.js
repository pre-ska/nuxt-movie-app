export default defineEventHandler((event) => {
  const { query, page } = getQuery(event);

  const config = useRuntimeConfig();

  const URL = `${config.apiBaseUrl}/search/movie?query=${query}&api_key=${config.apiKey}&page=${page}`;

  return $fetch(URL);
});
