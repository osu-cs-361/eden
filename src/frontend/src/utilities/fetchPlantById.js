const fetchPlantById = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/plant/" + id
  );
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("fetchPlantById error: HTTP " + response.status);
  }
};

module.exports = fetchPlantById;
