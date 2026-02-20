const HeroSection = () => {
  return (
    <section className="row g-4 mb-5">
      <div className="col-12 col-md-6">
        <p className="text-uppercase small mb-1 fw-bold">
          Nuova stazione radio
        </p>
        <h5 className="mb-3">
          Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
        </h5>
        <div className="rounded-4 overflow-hidden shadow-lg">
          <img
            src="public/images/1a.png"
            className="img-fluid w-100"
            alt="Apple Music Chill"
          />
        </div>
      </div>

      <div className="col-12 col-md-6">
        <p className="text-uppercase small mb-1 fw-bold">
          Nuova stazione radio
        </p>
        <h5 className="mb-3">Ecco la nuova casa della musica latina</h5>
        <div className="rounded-4 overflow-hidden shadow-lg">
          <img
            src="public/images/1b.png"
            className="img-fluid w-100"
            alt="Musica Latina"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
