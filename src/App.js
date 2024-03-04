import "./App.css";
import img1 from './Images/image1.png';

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="back"></div>
        <div className="front">
          <div className="imgset">
            <img
              width="100%"
              alt="" src={img1}
            />
          </div>
        </div>
        <div className="text-container">
          <p id="head">Happy Birthday My Best Friend!</p>
          <p>
            I hope your special day will bring you lots of happiness, love, and
            fun. You deserve them a lot. Enjoy!
          </p>
          <p>Hope your day goes great!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
