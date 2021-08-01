import React, { useState } from "react";

export default function PlantForm({ type, plant, history }) {
  const [id, setId] = useState(plant?.id ?? -1);
  const [species, setSpecies] = useState(plant?.species);
  const [subtitle, setSubtitle] = useState(plant?.subtitle);
  const [notes, setNotes] = useState(plant?.notes);
  const [waterInterval, setWaterInterval] = useState(
    plant?.watering_interval ?? 7
  );
  const [lastWatered, setLastWatered] = useState(
    plant?.last_watered ?? Date.now()
  );

  const submitPlantForm = (e) => {
    e.preventDefault();
    if (!species) return;
    const body = {
      species,
      subtitle,
      notes,
      watering_interval: waterInterval,
      last_watered: lastWatered,
    };
    if (id !== -1) body.id = id;

    if (type === "new") {
      const response = fetch("backend/new-plant", {
        method: "POST",
        body: JSON.stringify(body),
      });
      if (response.ok) {
        history.push("/app");
      }
    } else if (type === "edit") {
      const response = fetch("backend/edit-plant", {
        method: "PUT",
        body: JSON.stringify(body),
      });
      if (response.ok) {
        history.push("/app");
      }
    }
  };

  return (
    <form
      class="w-4/6 flex flex-col gap-y-2"
      onSubmit={(e) => submitPlantForm(e)}
    >
      <h1 class="text-xl">{type === "new" ? "Add New Plant" : "Edit Plant"}</h1>
      <input type="number" id="id" value={id} class="hidden" />
      <label for="species">Species</label>
      <input
        type="text"
        id="species"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
      />
      <label for="subtitle">Subtitle</label>
      <input
        type="text"
        id="subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <label for="notes">Notes</label>
      <textarea
        id="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <label for="water-interval">Watering Interval (days)</label>
      <input
        type="number"
        id="water-interval"
        value={waterInterval}
        onChange={(e) => setWaterInterval(e.target.value)}
      />
      <input type="date" id="last-watered" value={lastWatered} class="hidden" />
      <input
        type="submit"
        value={type === "new" ? "Add Plant" : "Edit Plant"}
        class="mt-2 self-center w-1/2"
      />
    </form>
  );
}
