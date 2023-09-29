export default defineEventHandler((event) => {
  const { query } = getQuery(event);
  const config = useRuntimeConfig();

  return $fetch(`${config.apiBaseUrl}/search/movie?query=${query}&api_key=${config.apiKey}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
    },
  });
});
