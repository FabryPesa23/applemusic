import { Home, Grid, Radio, Search } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="text-white">

      <div className="mb-4 ps-2 pt-2">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Apple_Music_logo.svg" 
          style={{ width: "100px", filter: "invert(1)" }} 
          alt="Apple Music" 
        />
      </div>

      {/* Cerca */}
      <div className="mb-4">
        <div className="input-group border border-secondary rounded-2 overflow-hidden bg-dark" style={{ backgroundColor: '#1a1a1a' }}>
          <span className="input-group-text bg-transparent border-0 pe-1">
            <Search size={16} className="text-danger " />
          </span>
          <input 
            type="text" 
            className="form-control bg-transparent border-0 text-white shadow-none ps-1" 
            placeholder="Cerca" 
            style={{ fontSize: '0.85rem' }}
          />
        </div>
      </div>

      {/* Menu Principale */}
      <nav className="nav flex-column gap-1">
        <a href="#" className="nav-link text-white d-flex align-items-center rounded-2 bg-secondary bg-opacity-25 py-2 px-3">
          <Home size={18} className="text-danger me-3" />
          <span className="fw-semibold">Home</span>
        </a>
        
        <a href="#" className="nav-link text-white d-flex align-items-center rounded-2 sidebar-hover py-2 px-3">
          <Grid size={18} className="text-danger me-3" />
          <span className="fw-semibold">Novità</span>
        </a>

        <a href="#" className="nav-link text-white d-flex align-items-center rounded-2 sidebar-hover py-2 px-3">
          <Radio size={18} className="text-danger me-3" />
          <span className="fw-semibold">Radio</span>
        </a>
      </nav>

    </div>
  );
};

export default Sidebar;