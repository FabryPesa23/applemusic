// components/RadioSection.jsx
const RadioSection = () => {
  const episodes = [
    { id: 1, img: "/images/radio-1.png", title: "Apple Music 1", desc: "La nuova radio mondiale" },
    { id: 2, img: "/images/radio-2.png", title: "Chill Station", desc: "Rilassati con noi" },
    { id: 3, img: "/images/radio-3.png", title: "Latino", desc: "Il ritmo del momento" }
  ];

  return (
    <section className="mb-5">
      <h3 className="fw-bold mb-3 border-bottom border-secondary pb-2">Nuovi episodi radio</h3>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        {episodes.map(ep => (
          <div key={ep.id} className="col">
            <div className="card bg-transparent border-0 h-100">
              <img src={ep.img} className="card-img-top rounded-3 mb-2 shadow" alt={ep.title} />
              <div className="card-body p-0">
                <p className="card-text mb-0 fw-bold text-truncate">{ep.title}</p>
                <p className="card-text text-secondary small text-truncate">{ep.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RadioSection;