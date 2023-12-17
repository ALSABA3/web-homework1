import React from "react";
import PlanetSections from "../Components/PlanetSections";

const Neptune = () => {
  const h1 = "Neptune";
  const p1 =
    "Uranus (18.27–20.06 AU (2.733–3.001 billion km; 1.698–1.865 billion mi) from the Sun), at 14 MEarth, has the lowest mass of the outer planets. Uniquely among the planets, it orbits the Sun on its side; its axial tilt is over ninety degrees to the ecliptic. This gives the planet extreme seasonal variation as each pole points toward and then away from the Sun. It has a much colder core than the other giant planets and radiates very little heat into space. As a consequence, it has the coldest planetary atmosphere in the Solar System. Uranus has 27 known satellites, the largest ones being Titania, Oberon, Umbriel, Ariel, and Miranda. Like the other giant planets, it possesses a ring system and magnetosphere. has several similarities to Jupiter, such as its atmospheric composition and magnetosphere. Although Saturn has 60% of Jupiter's volume, it is less than a third as massive, at 95 MEarth. Saturn is the only planet of the Solar System that is less dense than water. The rings of Saturn are made up of small ice and rock particles. Saturn has 145 confirmed satellites composed largely of ice. Two of these, Titan and Enceladus, show signs of geological activity; they, as well as five other Saturnian moons (Iapetus, Rhea, Dione, Tethys, and Mimas), are large enough to be round. Titan, the second-largest moon in the Solar System, is bigger than Mercury and the only satellite in the Solar System to have a substantial atmosphere. (4.951–5.457 AU (740.7–816.4 million km; 460.2–507.3 million mi) from the Sun), at 318 MEarth, is 2.5 times the mass of all the other planets put together. It is composed largely of hydrogen and helium. Jupiter's strong internal heat creates semi-permanent features in its atmosphere, such as cloud bands and the Great Red Spot. The planet possesses a 4.2–14 Gauss strength magnetosphere that spans 22–29 million km, making it, in certain respects, the largest object in the Solar System. Jupiter has 95 known satellites. The four largest, Ganymede, Callisto, Io, and Europa, are called the Galilean moons: they show similarities to the terrestrial planets, such as volcanism and internal heating. Ganymede, the largest satellite in the Solar System, is larger than Mercury Callisto is almost as large.";
  const a = "https://en.wikipedia.org/wiki/Neptune";
  return (
    <section className="Neptune" style={{ height: "100vh", width: "100vw" }}>
      <PlanetSections h1={h1} p1={p1} a={a} />
    </section>
  );
};

export default Neptune;
