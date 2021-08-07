export const fetchPlantById = async (id, token) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/plant/" + id,
    { headers: { Authorization: token } }
  );
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("fetchPlantById error: HTTP " + response.status);
  }
};

export const waterPlant = async (id, token) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/water-plant/" + id,
    { headers: { Authorization: token } }
  );
  return response.ok;
};

export const deletePlant = async (id, token) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/delete-plant/" + id,
    {
      method: "DELETE",
      headers: { Authorization: token },
    }
  );
  return response.ok;
};
