const RadioEpisodes = () => {
  // Qui puoi cambiare i nomi dei file con quelli che hai in public/images
  const radioData = [
    { id: 1, img: "/images/2a.png", title: "Apple Music 1", desc: "La nuova radio mondiale" },
    { id: 2, img: "/images/2b.png", title: "Chill Station", desc: "Rilassati con noi" },
    { id: 3, img: "/images/2c.png", title: "Latino", desc: "Il ritmo del momento" },
    { id: 4, img: "/images/2d.png", title: "Hip-Hop Authority", desc: "Le rime che contano" },
    { id: 5, img: "/images/2e.png", title: "Classics", desc: "I grandi successi" }
  ];

  return (
    <section className="mb-5">
      <h3 className="fw-bold mb-3 pb-2">
        Nuovi episodi radio
      </h3>
      
      {/* Griglia: 2 per riga su mobile, 5 su desktop */}
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        {radioData.map((item) => (
          <div key={item.id} className="col">
            <div className="card bg-transparent border-0 h-100">
              <img 
                src={item.img} 
                className="card-img-top rounded-3 mb-2 shadow-sm" 
                alt={item.title} 
                style={{ 
                  aspectRatio: '1/1', 
                  objectFit: 'cover',
                  cursor: 'pointer',
                  backgroundColor: '#2c2c2c' // Grigio di fallback se l'immagine manca
                }}
              />
              <div className="card-body p-0">
                <p className="card-text mb-0 fw-bold text-truncate" style={{ fontSize: '0.9rem' }}>
                  {item.title}
                </p>
                <p className="card-text text-secondary small text-truncate">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RadioEpisodes;