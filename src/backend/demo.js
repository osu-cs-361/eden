const fetch = require("node-fetch");

const populateTestData = async () => {
  const users = [
    { email: "test3@test.email", password: "password321" },
    { email: "test4@test.email", password: "secretphrase" },
  ];
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

  const plants = [
    {
      species: "Bromeliad",
      subtitle: "Monocot flowering plant",
      notes: "Kitchen windowsill",
      watering_interval: 4,
      last_watered: Date.now(),
      meta: { token: tokens[0] },
    },
    {
      species: "Snake Plant",
      subtitle: "Tall, rigid sword-shaped leaves",
      notes: "Fireplace mantle",
      watering_interval: 7,
      last_watered: Date.now(),
      meta: { token: tokens[0] },
    },
    {
      species: "Chrysanthemum",
      subtitle: "Bright, cheerful bloom",
      notes: "Living room window",
      watering_interval: 6,
      last_watered: Date.now(),
      meta: { token: tokens[1] },
    },
    {
      species: "Ficus",
      subtitle: "Woody shrub",
      notes: "Office",
      watering_interval: 5,
      last_watered: Date.now(),
      meta: { token: tokens[1] },
    },
  ];

  for (let plant of plants) {
    console.log(`Writing plant ${plant.species}`);
    fetch("http://localhost:3030/api/v1/new-plant", {
      method: "POST",
      body: JSON.stringify(plant),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${plant.meta.token}`,
      },
    });
  }
};

populateTestData();
