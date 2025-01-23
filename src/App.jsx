
import './App.css'
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Partners from './components/Partners/Partners';
import Features from './components/Features/Features';
import CryptoSection from './components/CryptoSection/CryptoSection';


const App = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <Partners />
      <Features />
      <CryptoSection />
    </div>
  );
};

export default App;