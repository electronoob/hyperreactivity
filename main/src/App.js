import './App.css';
import tune from './json/tune.json';
import React from 'react';

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
          <Row data={data}></Row>
        ))}
      </div>
    </div>
  );
}
class Row extends React.Component {
  constructor(props) {
    super(props);
    this.handleWheel = this.handleWheel.bind(this);
  }
  handleWheel (e)  {
    console.log(e);
  }
  render () {
    return (
      <div className="rows">
        <input onWheel={this.handleWheel} className="row row-note" defaultValue={this.props.data.note + "-" + this.props.data.octave} />
        <input onWheel={this.handleWheel} className="row row-instrument" defaultValue={"." + this.props.data.instrument} />
        <input onWheel={this.handleWheel} className="row row-volume" defaultValue="." />
        <input onWheel={this.handleWheel} className="row row-effect" defaultValue={this.props.data.effect} />
        <input onWheel={this.handleWheel} className="row row-parameter" defaultValue={this.props.data.parameter} />
      </div>
    )
  }
}

export default App;
