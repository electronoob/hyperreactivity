import tune from '../json/tune.json';
import React from 'react';

const CHANNELS = 4;
const ROWS = 16;

export default function Tracker() {
    return (
        <div className="tracker">
            <div className="lines">
            {[...Array(ROWS)].map((_, index) => (
                <div className="line">{index.toString(16).toUpperCase()}</div>
            ))}
            </div>
            {[...Array(CHANNELS)].map((_, index) => (
            <Channel id={index}></Channel>
            ))}
        </div>
    );
}

function Channel(props) {
    return (
      <div className="channel">
        <div>{props.id.toString(16).toUpperCase()}</div>
        <hr/>
        <div>
          {
          tune.channels[props.id]['rows'].map((data, index) => (
            <Row data={data} channel={props.id} row={index}></Row>
          ))
          }
        </div>
      </div>
    );
  }
  
  class Row extends React.Component {
    constructor(props) {
      super(props);
      this.handleWheel = this.handleWheel.bind(this);
      //this.count = useSelector((state) => state.rowJam.value)
      //this.dispatch = useDispatch()
    }
    handleWheel (e)  {
      let value = e.target.value;
      let element = e.target;
      let id = e.target.id;
  
      let direction = e.deltaY < 0 ? "up" : "down";
  
      console.log(e.deltaMode, e.deltaY, direction, element.dataset.channel, element.dataset.row);
  
    }
    render () {
  
      let channel = this.props.channel;
      let row = this.props.row;
      let identifier = "channel_" + channel + "_row_" + row;
      let row_note = identifier + "$note";
      let row_instrument = identifier + "$instrument";
      let row_volume = identifier + "$volume";
      let row_effect = identifier + "$effect";
      let row_parameter = identifier + "$paramater";
      
      return (
        <div className="row active" id={ identifier } >
          <input data-channel={channel} data-row={row} data-type="row_note" id={row_note} onWheel={this.handleWheel} className="row row-note" defaultValue={this.props.data.note + "-" + this.props.data.octave} />
          <input data-channel={channel} data-row={row} data-type="row_instrument" id={row_instrument} onWheel={this.handleWheel} className="row row-instrument" defaultValue={"." + this.props.data.instrument} />
          <input data-channel={channel} data-row={row} data-type="row_volume" id={row_volume} onWheel={this.handleWheel} className="row row-volume" defaultValue="." />
          <input data-channel={channel} data-row={row} data-type="row_effect" id={row_effect} onWheel={this.handleWheel} className="row row-effect" defaultValue={this.props.data.effect} />
          <input data-channel={channel} data-row={row} data-type="row_parameter" id={row_parameter} onWheel={this.handleWheel} className="row row-parameter" defaultValue={this.props.data.parameter} />
        </div>
      )
    }
  }