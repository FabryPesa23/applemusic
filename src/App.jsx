import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import NewReleases from "./components/NewReleases";
import HeroSection from "./components/HeroSection";
import RadioEpisodes from "./components/RadioEpisodes";
import { Play, SkipBack, SkipForward, Volume2, User } from 'lucide-react';

function App() {
  return (
    <div className="container-fluid p-0 text-white min-vh-100" style={{ backgroundColor: "#121212" }}>
      
      {/* --- NAVBAR MOBILE --- */}
      <header
        className="d-md-none fixed-top bg-dark d-flex justify-content-between align-items-center px-3"
        style={{ height: "54px", zIndex: 1060 }}
      >
        <div className="text-danger fs-3">≡</div>
        <div className="text-center">
          <img
            src="/images/apple-music-logo.svg"
            alt="Logo"
            style={{ width: "80px", filter: "invert(1)" }}
          />
        </div>
        <div className="text-danger fw-bold" style={{ fontSize: "0.9rem" }}>
          Accedi
        </div>
      </header>

      <div className="d-flex">
        {/* --- SIDEBAR DESKTOP --- */}
        <aside
          className="d-none d-md-block sticky-top vh-100 border-end border-secondary p-4"
          style={{
            width: "300px",
            minWidth: "300px",
            backgroundColor: "#2c2c2c", 
            borderRight: "#3B3B3C"
          }}
        >
          <Sidebar />
        </aside>

        {/* --- COLONNA DI DESTRA --- */}
        <div className="flex-grow-1 d-flex flex-column">
          
          {/* --- NAVBAR / PLAYER DESKTOP --- */}
          <header
            className="d-none d-md-flex align-items-center sticky-top px-4 justify-content-between"
            style={{ height: "60px", backgroundColor: "#2C2C2C", zIndex: 1040 }} 
          >
            {/* 1. Controlli Player  */}
            <div className="d-flex align-items-center gap-4" style={{ width: "25%" }}>
              <SkipBack size={18} fill="currentColor" style={{ cursor: "pointer", opacity: 0.8 }} />
              <Play size={24} fill="currentColor" style={{ cursor: "pointer" }} />
              <SkipForward size={18} fill="currentColor" style={{ cursor: "pointer", opacity: 0.8 }} />
            </div>

            {/* 2. Display Centrale */}
            <div className="flex-grow-1 d-flex justify-content-center">
              <div
                className="d-flex align-items-center justify-content-center rounded-1"
                style={{
                  backgroundColor: "#4D4D4D", 
                  width: "100%",
                  maxWidth: "480px",
                  height: "48px",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  style={{
                    width: "20px",
                    filter: "invert(1)",
                    opacity: 0.9,
                  }}
                />
              </div>
            </div>

            {/* 3. Volume e Accedi */}
            <div className="d-flex align-items-center justify-content-end gap-3" style={{ width: "25%" }}>
              <div className="d-flex align-items-center gap-2 me-2">
                <Volume2 size={16} className="text-secondary" />
                <input
                  type="range"
                  className="form-range custom-volume-slider"
                  style={{ width: "70px" }}
                />
              </div>
              <button
                className="btn btn-danger btn-sm px-3 fw-bold d-flex align-items-center gap-1"
                style={{ fontSize: "0.75rem", borderRadius: "4px" }}
              >
                <User size={14} fill="currentColor" />
                Accedi
              </button>
            </div>
          </header>

          {/* --- MAIN CONTENT --- */}
          <main className="p-4 pb-5">
            <div className="d-md-none" style={{ height: "54px" }}></div>

            <h1 className="fw-bold display-5 mb-4">Novità</h1>
            <hr className="border-secondary mb-4" />

            <HeroSection />
            <RadioEpisodes />
            <NewReleases />

            {/* Sezione Esplora */}
            <section className="mt-5 mb-5">
              <h3 className="fw-bold mb-3 pb-2">
                Altro da esplorare
              </h3>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {[
                  "Esplora per genere", "Worldwide", "Video musicali",
                  "Classifiche", "Nuovi artisti", "Audio spaziale",
                  "Hit del passato", "Decenni", "Attività e stati d'animo",
                ].map((cat) => (
                  <div key={cat} className="col">
                    <div className="p-3 bg-dark rounded-3 d-flex justify-content-between align-items-center shadow-sm border border-secondary border-opacity-25">
                      <span className="text-danger fw-bold">{cat}</span>
                      <span className="text-danger">›</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

<footer 
  className="mt-5 pt-4 px-4" 
  style={{ 
    backgroundColor: "#1F1F1F", 
    color: "#86868b",
    marginLeft: "-1.5rem",
    marginRight: "-1.5rem", 
    marginBottom: "-3rem"  
  }}
>
  <div className="pb-4" style={{ fontSize: "0.8rem" }}>
    <p className="mb-2">
      <span className="text-white ms-1 cursor-pointer">Italia</span> | 
      <span className="text-secondary ms-1 cursor-pointer">English (UK)</span>
    </p>
    
    <p className="mb-3">
      Copyright © 2024 <span className="text-white">Apple Inc.</span> Tutti i diritti riservati.
    </p>

    <div className="d-flex flex-wrap gap-3 text-white-50"> 
  
      <span className="cursor-pointer hover-white">Condizioni dei servizi internet</span>
      <span className="border-end border-secondary border-opacity-50"></span>
      <span className="cursor-pointer hover-white">Apple Music e privacy</span>
      <span className="border-end border-secondary border-opacity-50"></span>
      <span className="cursor-pointer hover-white">Avviso sui cookie</span>
      <span className="border-end border-secondary border-opacity-50"></span>
      <span className="cursor-pointer hover-white">Supporto</span>
      <span className="border-end border-secondary border-opacity-50"></span>
      <span className="cursor-pointer hover-white">Feedback</span>
    </div>
  </div>
</footer>
          </main>
        </div>
      </div>

      {/* --- PLAYER MOBILE --- */}
      <footer
        className="d-md-none fixed-bottom bg-dark border-top border-secondary p-2 shadow-lg"
        style={{ zIndex: 1060 }}
      >
        <div className="d-flex justify-content-between align-items-center px-2">
          <div className="d-flex align-items-center gap-2 overflow-hidden" style={{ maxWidth: "50%" }}>
            <div className="bg-secondary rounded" style={{ minWidth: "40px", height: "40px" }}></div>
            <div className="text-truncate small fw-bold">Brano in riproduzione...</div>
          </div>
          <div className="text-white d-flex align-items-center gap-3">
            <SkipBack size={20} fill="currentColor" />
            <Play size={28} fill="currentColor" />
            <SkipForward size={20} fill="currentColor" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;