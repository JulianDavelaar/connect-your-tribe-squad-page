app.get("/", async function (request, response) {
  const sortOption = request.query.sort;

  const params = {
    fields: "*,squads.*",
  };

 

  const personResponse = await fetch(
    "https://fdnd.directus.app/items/person/?" + new URLSearchParams(params),
  );

  const personResponseJSON = await personResponse.json();

  response.render("index.liquid", {
    persons: personResponseJSON.data,
    squads: squadResponseJSON.data,
    sort: sortOption,
  });
});
