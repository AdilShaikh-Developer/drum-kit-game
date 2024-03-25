import bassdrumPedal from "./assets/images/bass-drum-pedal.webp";
import bassdrum from "./assets/images/bass-drum.webp";
import crashCymbal from "./assets/images/crash-cymbal.jpg";
import floorTom from "./assets/images/floor-tom.jpg";
import highTom from "./assets/images/high-tom-tom.jpg";
import lowTom from "./assets/images/low-tom-tom.jpg";
import rideCymbal from "./assets/images/ride-cymbal.jpg";
import snareDrum from "./assets/images/snare-drum.jpg";

// import bassdrum_soundeffect from "./assets/sound-effects/bass-drum"
import bassdrum_soundeffect from "./assets/sound effects/bass-drum.mp3";
import crashcymbal_soundeffect from "./assets/sound effects/crash-cymbal.mp3";
import floortom_soundeffect from "./assets/sound effects/floor-tom.mp3";
import hightomtom_soundeffect from "./assets/sound effects/high-tomtom.mp3";
import lowtomtom_soundeffect from "./assets/sound effects/low-tomtom.mp3";
import ridecymbal_soundeffect from "./assets/sound effects/ride-cymbal.mp3";
import snaredrum_soundeffect from "./assets/sound effects/snare-drum.mp3";

import "./app.scss";

const App = () => {
  return (
    <>
      <div className="header">
        <h1>BeatMaster</h1>
        <h3>Your Ultimate Drum Kit Experience Online</h3>
      </div>
      <div className="container">
        <img
          src={bassdrum}
          className="bass-drum "
          onClick={(e) => {
            e.currentTarget.classList.add("smash");
            new Audio(bassdrum_soundeffect).play();
            e.currentTarget.nextSibling.click();
          }}
          onAnimationEnd={(e) => e.currentTarget.classList.remove("smash")}
        />
        <img
          src={bassdrumPedal}
          className="bass-drum-pedal"
          onClick={(e) => {
            e.currentTarget.classList.add("kick");
            e.currentTarget.previousSibling.click();
          }}
          onAnimationEnd={(e) => e.currentTarget.classList.remove("kick")}
        />
        <img
          src={highTom}
          className="high-tom "
          onClick={(e) => {
            e.currentTarget.classList.add("smash");
            new Audio(hightomtom_soundeffect).play();
          }}
          onAnimationEnd={(e) => e.currentTarget.classList.remove("smash")}
        />
        <img
          src={lowTom}
          className="low-tom "
          onClick={(e) => {
            e.currentTarget.classList.add("smash");
            new Audio(lowtomtom_soundeffect).play();
          }}
          onAnimationEnd={(e) => e.currentTarget.classList.remove("smash")}
        />
        <img
          src={floorTom}
          className="floor-tom "
          onClick={(e) => {
            e.currentTarget.classList.add("smash");
            new Audio(floortom_soundeffect).play();
          }}
          onAnimationEnd={(e) => e.currentTarget.classList.remove("smash")}
        />
        <img
          src={rideCymbal}
          className="ride-cymbal "
          onClick={(e) => {
            e.currentTarget.classList.add("blink");
            new Audio(ridecymbal_soundeffect).play();
          }}
          onAnimationEnd={(e) => e.currentTarget.classList.remove("blink")}
        />
        <img
          src={snareDrum}
          className="snare-drum "
          onClick={(e) => {
            e.currentTarget.classList.add("smash");
            new Audio(snaredrum_soundeffect).play();
          }}
          onAnimationEnd={(e) => e.currentTarget.classList.remove("smash")}
        />
        <img
          src={crashCymbal}
          className="crash-cymbal "
          onClick={(e) => {
            e.currentTarget.classList.add("blink");
            new Audio(crashcymbal_soundeffect).play();
          }}
          onAnimationEnd={(e) => e.currentTarget.classList.remove("blink")}
        />
      </div>
    </>
  );
};

export default App;
