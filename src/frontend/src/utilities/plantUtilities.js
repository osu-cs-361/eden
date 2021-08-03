export const fetchPlantById = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/plant/" + id
  );
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("fetchPlantById error: HTTP " + response.status);
  }
};

export const waterPlant = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/water-plant/" + id
  );
  return response.ok;
};

export const deletePlant = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/delete-plant/" + id,
    {
      method: "DELETE",
    }
  );
  return response.ok;
};
