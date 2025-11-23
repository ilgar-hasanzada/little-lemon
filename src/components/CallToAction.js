import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/booking');
  };

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-text">
        <h1 id="hero-heading">Little Lemon</h1>
        <p className="hero-location">Chicago</p>
        <p className="hero-description">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button
          type="button"
          className="primary-button"
          onClick={handleReserveClick}
        >
          Reserve a table
        </button>
      </div>
      <div className="hero-image-placeholder">
        {/* Buraya sonra real şəkil əlavə edə bilərsən */}
      </div>
    </section>
  );
}

export default CallToAction;