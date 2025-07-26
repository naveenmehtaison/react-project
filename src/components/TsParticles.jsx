import Particles from "react-tsparticles";

export default function BackgroundParticles() {
  return (
    <Particles
      options={{
        background: {
          color: "#0d47a1",
        },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { speed: 1 },
          links: { enable: true, color: "#ffffff" },
        },
      }}
    />
  );
}
