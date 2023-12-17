import React from "react";
import PlanetSections from "../Components/PlanetSections";

const Mercury = () => {
  const h1 = "Mercury";
  const p1 =
    "Mercury (0.307–0.588 AU (45.9–88.0 million km; 28.5–54.7 million mi) from the Sun) is the closest planet to the Sun. The smallest planet in the Solar System (0.055 MEarth), Mercury has no natural satellites. The dominant geological features are impact craters or basins with ejecta blankets, the remains of early volcanic activity including magma flows, and lobed ridges or rupes that were probably produced by a period of contraction early in the planet's history. Mercury's very tenuous atmosphere consists of solar-wind particles trapped by Mercury's magnetic field, as well as atoms blasted off its surface by the solar wind. Its relatively large iron core and thin mantle have not yet been adequately explained. Hypotheses include that its outer layers were stripped off by a giant impact, or that it was prevented from fully accreting by the young Sun's energy. There have been searches for \"Vulcanoids\", asteroids in stable orbits between Mercury and the Sun, but none have been discovered.";
  const a = "https://en.wikipedia.org/wiki/Mercury_(planet)";
  return (
    <section className="Mercury" style={{ height: "100vh", width: "100vw" }}>
      <PlanetSections h1={h1} p1={p1} a={a} />
    </section>
  );
};

export default Mercury;
