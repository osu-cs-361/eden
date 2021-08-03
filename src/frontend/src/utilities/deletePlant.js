const deletePlant = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/delete-plant/" + id,
    {
      method: "DELETE",
    }
  );
  return response.ok;
};

module.exports = deletePlant;
