import { Play, SkipBack, SkipForward, Volume2, User } from 'lucide-react';

const Player = () => {
  return (
    <header className="d-none d-md-flex align-items-center border-bottom border-secondary sticky-top px-3 justify-content-between" 
            style={{ height: "55px", backgroundColor: "#1d1d1f", zIndex: 1040 }}>
      
      {/* SEZIONE SINISTRA: Controlli */}
      <div className="d-flex align-items-center gap-3" style={{ width: "30%" }}>
        <SkipBack size={20} className="text-secondary cursor-pointer" fill="currentColor" />
        <Play size={24} className="text-white cursor-pointer" fill="currentColor" />
        <SkipForward size={20} className="text-secondary cursor-pointer" fill="currentColor" />
      </div>

      {/* SEZIONE CENTRALE: Display con Mela */}
      <div className="flex-grow-1 d-flex justify-content-center">
        <div className="d-flex align-items-center justify-content-center rounded-2 border border-secondary shadow-sm" 
             style={{ 
               backgroundColor: "#2c2c2c", 
               width: "100%", 
               maxWidth: "500px", 
               height: "32px" 
             }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
            alt="Apple" 
            style={{ width: "14px", filter: "invert(1)", opacity: 0.8 }} 
          />
        </div>
      </div>

      {/* SEZIONE DESTRA: Volume e Accedi */}
      <div className="d-flex align-items-center justify-content-end gap-3" style={{ width: "30%" }}>
        <div className="d-flex align-items-center gap-2">
          <Volume2 size={16} className="text-secondary" />
          <input 
            type="range" 
            className="form-range player-slider" 
            style={{ width: "80px" }} 
          />
        </div>
        <button className="btn btn-danger btn-sm rounded-pill px-3 d-flex align-items-center gap-1" 
                style={{ fontSize: "0.75rem", backgroundColor: "#fa243c", border: "none" }}>
          <User size={14} fill="currentColor" />
          Accedi
        </button>
      </div>
    </header>
  );
};

export default Player;