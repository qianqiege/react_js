import React, { Component, PropTypes } from "react";
import { observer } from "mobx-react";
import createG2 from 'g2-react';
// import { Stat, Frame } from 'g2';
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
      chart.col('value', {
        type: 'linear',
        min: 0, 
        max: 30,
        alias: '血糖值',
      });
      chart.col('time', {
        alias: '时间',
      });
      chart.col('stateType', {
        alias: '状态值',
      });
      chart.line().position('time*value').color("stateType", ["red", "#e1e1e1", "#525252", "blue"]).shape(props.shape).size(2);
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
    shape: 'spline',
    width: 550,
    height: 500,
    plotCfg: {
      margin: [20, 100, 50, 120],
    },
  }
  render() {
    let data = PatientRecord.bloodGlu.data.slice();
    let obj = "";
    data = data.map(d => {
      if(d.item_type == 1) {
        obj = "餐前血糖";
      }else if(d.item_type == 2) {
        obj = "餐后血糖";
      }else if(d.item_type == 3) {
        obj = "睡前血糖";
      }else if(d.item_type == 4) {
        obj = "睡后血糖";
      }else {
        obj = "没有状态";
      }
      d = Object.assign({}, { 'time': d.datetime, 'value': d.value, 'stateType': obj });
      return d;
    }); 
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