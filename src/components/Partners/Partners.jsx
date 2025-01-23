import './Partners.css';
import img1 from '../../assets/images/morpheus.png';
import img2 from '../../assets/images/segment.png';
import img3 from '../../assets/images/samsung.png';
import img4 from '../../assets/images/monday.png';
import img5 from '../../assets/images/oralce.png';

const Partners = () => (
    <section className="partners-section">
      <p>Trusted By Over 100+ Startups and freelance business</p>
      <div className="partner-logos">
        <img src={img5} alt="Oracle" />
        <img src={img1} alt="Werkplus" />
        <img src={img3} alt="Samsung" />
        <img src={img4} alt="Monday" />
        <img src={img2} alt="Segment" />
      </div>
    </section>
  );
  export default Partners;