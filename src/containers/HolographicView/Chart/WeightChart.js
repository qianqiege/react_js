import React, { Component } from "react";
import { observer } from "mobx-react";
import createG2 from 'g2-react';
import { Stat, Frame } from 'g2';
import PatientRecord from 'models/PatientRecord';

@observer
class HigherChart extends Component {
  constructor(props, ...others) {
    super(props, ...others);
    this.Chart = createG2(chart => {
      this.chart = chart;
      chart.col('value', {
        type: 'linear',
        min: 0, 
        max: 100,
        alias: '体重 (kg)',
      })
      chart.col('time', {
        alias: '时间',
      })
      chart.col('stateType', {
        alias: '状态值',
      })
      chart.line().position('time*value').color("#FF6700").shape(props.shape).size(2);
      chart.render();
    });
  }

  render() {
    return (<this.Chart {...this.props} />);
  }
}

@observer
class MyComponent extends Component {
  state = {
    shape: 'spline',
    width: 1100,
    height: 500,
    plotCfg: {
      margin: [20, 100, 50, 120],
    },
  }
  render() {
    let data = PatientRecord.weight.data.slice();
    console.log(data);
    let obj = "";
    data = data.map(d => {
      d = Object.assign({}, { 'time': d.datetime, 'value': d.value});
      return d;
    }) 
    return (
      <div>
        <HigherChart
          shape={this.state.shape}
          data={data}
          width={this.state.width}
          height={this.state.height}
          plotCfg={this.state.plotCfg}
        />
      </div>
    );
  }
}

export default MyComponent;