import logo from './logo.svg';
import './App.css';
import h from "./hanan.jpg"
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <a href="https://www.instagram.com/hanan_alnakhal/" style={{color:"white"}} target="blank">
          <div className="promo" style={{"--overlay-color": "pink"}}>
            <div className="image-wrapper"><img src={h}/>
            </div>
            <h2 className="title" data-cta="My IG :)">Hanan_</h2>
            <h2 className="title" data-cta="My IG :)"style={{colo:"black"}}>Hanan_</h2>
          </div>
          </a>
          <div style={{alignItems:"left",flexWrap:"wrap",marginLeft:"100px"}}>
          <h3 style={{textAlign:"start"}}>
            HI :D <br/>
            my name is hanan I am 17 years old  <br/>
            I'm an ARTIST,coder/programmer,and a science lover ;) <br/>

          </h3></div>
      </header>
    </div>
  );
}

export default App;
