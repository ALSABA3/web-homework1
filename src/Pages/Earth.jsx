import React from "react";
import PlanetSections from "../Components/PlanetSections";

const Earth = () => {
  const h1 = "Earth";
  const p1 =
    "Earth (0.983–1.017 AU (147.1–152.1 million km; 91.4–94.5 million mi) from the Sun) is the largest and densest of the inner planets, the only one known to have current geological activity, and the only place in the universe where life is known to exist. Its liquid hydrosphere is unique among the terrestrial planets, and it is the only planet where plate tectonics has been observed. Earth's atmosphere is radically different from those of the other planets, having been altered by the presence of life to contain 21% free oxygen. The planetary magnetosphere shields the surface from solar and cosmic radiation, limiting atmospheric stripping and maintaining habitability. It has one natural satellite, the Moon, the only large satellite of a terrestrial planet in the Solar System";
  const a = "https://en.wikipedia.org/wiki/Earth";
  return (
    <section className="Earth" style={{ height: "100vh", width: "100vw" }}>
      <PlanetSections h1={h1} p1={p1} a={a} />
    </section>
  );
};

export default Earth;
