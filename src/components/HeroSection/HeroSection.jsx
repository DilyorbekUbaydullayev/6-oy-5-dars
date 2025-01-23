import './HeroSection.css'
const HeroSection = () => {

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Managing business payments has never been easier</h1>
        <p>
          let best any let checking assistance indulgence unpleasing. 
          Not thoughts all exercise blessing Indulgence way everything
        </p>
        <div className="hero-buttons">
          <button className="btn-primary1">Our Process</button>
          <button className="btn-play">
            <span className="play-icon">▶</span>
            See How It Works
          </button>
        </div>
      </div>
      <div className="signup-card">
        <h3>Get Started for Free</h3>
        <form className="signup-form">
          <input
            type="email"
            placeholder="Email Address"
            
            
          />
          <input
            type="password"
            placeholder="Password"
           
            
          />
          <button className="btn-orange">GET STARTED</button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;