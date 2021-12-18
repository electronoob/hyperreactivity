import './App.css';
import tune from './json/tune.json';

const CHANNELS = 4;
const ROWS = 16;


function App() {
  return (
    <div id="app">
      <div id="panel">
      </div>
      <div id="tracker" className="tracker">
        <div id="lines" className="lines">
          {[...Array(ROWS)].map((_, index) => (
            <div className="line">{index.toString(16).toUpperCase()}</div>
          ))}
        </div>
        {[...Array(CHANNELS)].map((_, index) => (
          <Channel id={index}></Channel>
        ))}
      </div>
    </div>
  );
}
function Channel(props) {
  return (
    <div id={"channel_" + props.id} className="channel">
      <div id={"name_" + props.id}>{props.id.toString(16).toUpperCase()}</div>
      <hr/>
      <div id="track_0">
        {tune.channels[props.id]['rows'].map((data, index) => (
          <div className="rows">
            <input className="row row-note" value={data.note + "-" + data.octave} />
            <input className="row row-instrument" value={"." + data.instrument} />
            <input className="row row-volume" value="." />
            <input className="row row-effect" value={data.effect} />
            <input className="row row-parameter" value={data.parameter} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
