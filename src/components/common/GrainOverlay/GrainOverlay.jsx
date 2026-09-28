const GrainOverlay = ({ opacity = 0.04, className = '' }) => {
  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] bg-grain mix-blend-multiply ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};

export default GrainOverlay;