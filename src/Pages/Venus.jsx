import React from "react";
import PlanetSections from "../Components/PlanetSections";

const Venus = () => {
  const h1 = "Venus";
  const p1 =
    "Venus (0.718–0.728 AU (107.4–108.9 million km; 66.7–67.7 million mi) from the Sun) is close in size to Earth (0.815 MEarth) and, like Earth, has a thick silicate mantle around an iron core, a substantial atmosphere, and evidence of internal geological activity. It is much drier than Earth, and its atmosphere is ninety times as dense. Venus has no natural satellites. It is the hottest planet, with surface temperatures over 400 °C (752 °F), mainly due to the amount of greenhouse gases in the atmosphere. The planet has no magnetic field that would prevent the depletion of its substantial atmosphere, which suggests that its atmosphere is being replenished by volcanic eruptions. A relatively young planetary surface displays extensive evidence of volcanic activity, but is devoid of plate tectonics. It may undergo resurfacing episodes on a time scale of 700 million years.";
  const a = "https://en.wikipedia.org/wiki/Venus";
  return (
    <section className="Venus" style={{ height: "100vh", width: "100vw" }}>
      <PlanetSections h1={h1} p1={p1} a={a} />
    </section>
  );
};

export default Venus;
