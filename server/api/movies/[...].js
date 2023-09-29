//! ovo će uhvatit sve na /movies/blabla osim /movies/search jer imam poseban file za search rutu

export default defineEventHandler((event) => {
  const id = [...event.node.req.url.split("/")].pop();
  const config = useRuntimeConfig();

  return $fetch(`${config.apiBaseUrl}/movie/${id}&api_key=${config.apiKey}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
    },
  });
});
