import React from "react";
import PlanetSections from "../Components/PlanetSections";

const Jupiter = () => {
  const h1 = "Jupiter";
  const p1 =
    "Jupiter (4.951–5.457 AU (740.7–816.4 million km; 460.2–507.3 million mi) from the Sun), at 318 MEarth, is 2.5 times the mass of all the other planets put together. It is composed largely of hydrogen and helium. Jupiter's strong internal heat creates semi-permanent features in its atmosphere, such as cloud bands and the Great Red Spot. The planet possesses a 4.2–14 Gauss strength magnetosphere that spans 22–29 million km, making it, in certain respects, the largest object in the Solar System. Jupiter has 95 known satellites. The four largest, Ganymede, Callisto, Io, and Europa, are called the Galilean moons: they show similarities to the terrestrial planets, such as volcanism and internal heating. Ganymede, the largest satellite in the Solar System, is larger than Mercury; Callisto is almost as large.";
  const a = "https://en.wikipedia.org/wiki/Jupiter";
  return (
    <section className="Jupiter" style={{ height: "100vh", width: "100vw" }}>
      <PlanetSections h1={h1} p1={p1} a={a} />
    </section>
  );
};

export default Jupiter;
