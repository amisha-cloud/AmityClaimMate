import '../styles/hero.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content text-center">
          <h1 className="fw-bold display-4">Welcome to <span className="text-primary">AmityClaimMate</span></h1>
          <h5 className="fw-semibold text-light mb-3">University Lost & Found Portal</h5>
          <p className="lead text-light">Helping students reconnect with their lost belongings with ease</p>
          <button className="btn btn-primary btn-lg mt-3">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
