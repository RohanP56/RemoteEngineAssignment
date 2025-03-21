import './App.css';
import Imagecomp from './components/Imagecomp';

function App() {
  return (
    <div className="landing-container">
      <div className="header-section">
        <h1 className="main-title">Discover the beauty around the world</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget diam.
        </p>
        <button className="explore-button">Explore</button>
      </div>

      <Imagecomp />
    </div>
  );
}

export default App;
