import React, { Component, PropTypes } from "react";
import { observer } from "mobx-react";
import createG2 from 'g2-react';
import { Frame } from 'g2';
import PatientRecord from 'models/PatientRecord';

@observer
class HigherChart extends Component {
  static propTypes = {
    shape: PropTypes.string,
  }
  constructor(props, ...others) {
    super(props, ...others);
    this.Chart = createG2(chart => {
      this.chart = chart;
      chart.col('date', {
        alias: '日期'
      });
      chart.col('value', {
        alias: '血压值'
      });
      chart.legend({
        position: 'right',
      });
      chart.line().position('date*value').color('类型', ['#FF4427', '#72FF86']).shape('line').size(2);
      chart.render();
    });
  }

  render() {
    return (<this.Chart {...this.props} />);
  }
}

@observer
class MyComponent extends Component {
  static propTypes = {
    shape: PropTypes.string,
  }
  state = {
    width: 1100,
    height: 500,
    plotCfg: {
      margin: [20, 100, 50, 120],
    },
  }
  render() {
    let data = PatientRecord.bloodPre.data.slice();
    data = data.map(d => {
      d = Object.assign({}, { 'date': d.datetime, '收缩压': d.min_blood_pressure, '舒张压': d.max_blood_pressure});
      return d;
    });
    let frame = new Frame(data);
    frame = Frame.combinColumns(frame, ['收缩压', '舒张压'], 'value', '类型', 'date');
    return (
      <div>
        <HigherChart
          shape={this.state.shape}
          data={frame.data}
          width={this.state.width}
          height={this.state.height}
          plotCfg={this.state.plotCfg}
        />
      </div>
    );
  }
}

export default MyComponent;