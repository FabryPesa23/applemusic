const PlayerControls = ({ isDesktop }) => {
  return (
    <div className={`d-flex align-items-center justify-content-center gap-3 ${isDesktop ? 'text-white-50' : 'text-white'}`}>
      <span style={{ cursor: 'pointer', fontSize: isDesktop ? '1.2rem' : '1.5rem' }}>shuffle</span>
      <span style={{ cursor: 'pointer', fontSize: isDesktop ? '1.2rem' : '1.5rem' }}>⏮</span>
      <span style={{ cursor: 'pointer', fontSize: isDesktop ? '2rem' : '2.5rem' }}>▶</span>
      <span style={{ cursor: 'pointer', fontSize: isDesktop ? '1.2rem' : '1.5rem' }}>⏭</span>
      <span style={{ cursor: 'pointer', fontSize: isDesktop ? '1.2rem' : '1.5rem' }}>repeat</span>
    </div>
  );
};

export default PlayerControls