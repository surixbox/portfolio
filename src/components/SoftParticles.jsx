function SoftParticles() {
  return (
    <div
      className="
        fixed
        inset-0
        -z-50
        pointer-events-none
        opacity-40
      "
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
  );
}

export default SoftParticles;
