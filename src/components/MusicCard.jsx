const MusicCard = ({ image, title, subtitle, isExplicit }) => {
  return (
    <div className="col">
      <div className="card bg-transparent border-0 h-100">
        <img src={image} className="card-img-top rounded-3 shadow-sm mb-2" alt={title} />
        <div className="card-body p-0">
          <p className="m-0 fw-bold text-truncate" style={{ fontSize: '0.9rem' }}>
            {title} {isExplicit && <small className="badge bg-light text-dark ms-1">E</small>}
          </p>
          <p className="text-muted text-truncate" style={{ fontSize: '0.85rem' }}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;