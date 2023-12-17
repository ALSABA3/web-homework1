import React from "react";
import PlanetSections from "../Components/PlanetSections";

const Mars = () => {
  const h1 = "Mars";
  const p1 =
    "Mars (1.382–1.666 AU (206.7–249.2 million km; 128.5–154.9 million mi) from the Sun) is smaller than Earth and Venus (0.107 MEarth). It has an atmosphere of mostly carbon dioxide with a surface pressure of 6.1 millibars (0.088 psi; 0.18 inHg); roughly 0.6% of that of Earth but sufficient to support weather phenomena. Its surface, peppered with volcanoes, such as Olympus Mons, and rift valleys, such as Valles Marineris, shows geological activity that may have persisted until as recently as 2 million years ago. Its red color comes from iron oxide (rust) in its soil, while the polar regions show white ice caps consisting largely of water. Mars has two tiny natural satellites (Deimos and Phobos) thought to be either captured asteroids, or ejected debris from a massive impact early in Mars's history.";
  const a = "https://en.wikipedia.org/wiki/Mars";
  return (
    <section className="Mars" style={{ height: "100vh", width: "100vw" }}>
      <PlanetSections h1={h1} p1={p1} a={a} />
    </section>
  );
};

export default Mars;
