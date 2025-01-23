import './Features.css';
import img1 from '../../assets/images/icon1.png';
import img2 from '../../assets/images/icon2.png';
import img3 from '../../assets/images/icon3.png';
const Features = () => (
    <section className="features-section">
      <h2>Believing neglected so so allowance</h2>
      <p>
        We go up stairs friends time message as delight. 
        Whole front of our plate heard ought. His defective nor convinced residence own.
      </p>
      <button className="btn-primary">We are open growth marketing agency!</button>
      
      <div className="features-grid">
        {[
          {
            icon: img1,
            title: "Let Ask Possible Mistress",
            description: "relationship terminated celebrating met motionless departure and excellence day motionless satisfied he"
          },
          {
            icon: img2,
            title: "Elegance Get Likewise",
            description: "Excellence day excellence get likewise proposal rejoiced collected regardless"
          },
          {
            icon: img3,
            title: "Message Open Nothing",
            description: "speaking her extended dwelling simple entire message as delight whole front plate"
          }
        ].map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <img src={feature.icon} width={50} alt="" />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Features;