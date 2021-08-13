const fetch = require("node-fetch");
const fs = require("fs");

const writeUsers = async (users) => {
  const tokens = [];
  for (let user of users) {
    console.log(`Writing user ${user.email}`);
    const response = await fetch("http://localhost:3030/api/v1/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      tokens.push(data.token);
    }
  }
  return tokens;
};

writePlants = async (plants, tokens) => {
  for (let i = 0; i < plants.length; i++) {
    const token = tokens[i % tokens.length];
    const plant = plants[i];

    plant.last_watered = Date.now();
    console.log(`Writing plant ${plant.species}`);

    await fetch("http://localhost:3030/api/v1/new-plant", {
      method: "POST",
      body: JSON.stringify(plant),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
};

const populateTestData = async () => {
  const users = JSON.parse(fs.readFileSync("./test-data/users.json"));
  const plants = JSON.parse(fs.readFileSync("./test-data/plants.json"));
  console.log(users);
  console.log(plants);
  // const tokens = writeUsers(users);
  // await writePlants(plants, tokens);
};

populateTestData();
