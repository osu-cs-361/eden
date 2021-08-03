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

const waterPlant = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/water-plant/" + id
  );
  return response.ok;
};

const deletePlant = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/delete-plant/" + id,
    {
      method: "DELETE",
    }
  );
  return response.ok;
};

module.exports = { fetchPlantById, waterPlant, deletePlant };
