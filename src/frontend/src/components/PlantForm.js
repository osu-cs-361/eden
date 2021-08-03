import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function PlantForm({ type, plant }) {
  const [id, setId] = useState(plant?.id ?? -1);
  const [species, setSpecies] = useState(plant?.species ?? "");
  const [subtitle, setSubtitle] = useState(plant?.subtitle ?? "");
  const [notes, setNotes] = useState(plant?.notes ?? "");
  const [waterInterval, setWaterInterval] = useState(
    plant?.watering_interval ?? 7
  );
  const [lastWatered, setLastWatered] = useState(
    plant?.last_watered ?? Date.now()
  );

  const history = useHistory();

  const submitPlantForm = async (e) => {
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
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/new-plant",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (response.ok) {
        history.push("/app");
      }
    } else if (type === "edit") {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/edit-plant",
        {
          method: "PUT",
          body: JSON.stringify(body),
        }
      );
      if (response.ok) {
        history.push("/app");
      }
    }
  };

  return (
    <form
      className="flex flex-col w-4/6 gap-y-2"
      onSubmit={(e) => submitPlantForm(e)}
    >
      <h1 className="text-xl">
        {type === "new" ? "Add New Plant" : "Edit Plant"}
      </h1>
      <input type="number" id="id" value={id} className="hidden" readOnly />
      <label htmlFor="species">Species</label>
      <input
        type="text"
        id="species"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
      />
      <label htmlFor="subtitle">Subtitle</label>
      <input
        type="text"
        id="subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <label htmlFor="notes">Notes</label>
      <textarea
        id="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <label htmlFor="water-interval">Watering Interval (days)</label>
      <input
        type="number"
        id="water-interval"
        value={waterInterval}
        onChange={(e) => setWaterInterval(e.target.value)}
      />
      <input
        type="date"
        id="last-watered"
        value={lastWatered}
        className="hidden"
        readOnly
      />
      <input
        type="submit"
        value={type === "new" ? "Add Plant" : "Edit Plant"}
        className="self-center w-1/2 mt-2"
      />
    </form>
  );
}
