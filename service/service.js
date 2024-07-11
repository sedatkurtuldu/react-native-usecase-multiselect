export const fetchCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();
  return json.results;
};

export const fetchEpisodeCount = async (id) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();
  return json.episode.length;
};
