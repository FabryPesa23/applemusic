import { useEffect, useState } from 'react';

const NewReleases = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cerchiamo 3 generi/artisti diversi per essere sicuri di avere varietà
    const fetchMusic = async () => {
      try {
        const queries = ['pop', 'rock', 'trap'];
        let allResults = [];
        
        for (const q of queries) {
          const res = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${q}`);
          const data = await res.json();
          allResults = [...allResults, ...data.data];
        }

        const uniqueAlbums = [];
        const seenAlbums = new Set();

        for (let item of allResults) {
          if (!seenAlbums.has(item.album.id)) {
            seenAlbums.add(item.album.id);
            uniqueAlbums.push(item);
          }
          if (uniqueAlbums.length === 10) break; // Ci fermiamo solo quando ne abbiamo 10
        }

        setAlbums(uniqueAlbums);
        setLoading(false);
      } catch (err) {
        console.error("Errore API:", err);
        setLoading(false);
      }
    };

    fetchMusic();
  }, []);

  if (loading) return <div className="p-4 text-secondary">Caricamento...</div>;

  return (
    <section className="mb-5">
      <h3 className="fw-bold mb-3 pb-2">Nuove uscite</h3>
      
      {/* row-cols-lg-5 forza 5 colonne. 
          Con 10 elementi avrai per forza 2 righe da 5.
      */}
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        {albums.map((item) => (
          <div key={item.album.id} className="col">
            <div className="card bg-transparent border-0 h-100">
              <img 
                src={item.album.cover_big} 
                className="card-img-top rounded-3 mb-2 shadow-sm" 
                alt={item.album.title} 
                style={{ aspectRatio: '1/1', objectFit: 'cover' }}
              />
              <div className="card-body p-0">
                <p className="card-text mb-0 fw-bold text-truncate" style={{ fontSize: '0.9rem' }}>
                  {item.album.title}
                </p>
                <p className="card-text text-secondary small text-truncate">
                  {item.artist.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;