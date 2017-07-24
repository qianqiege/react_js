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
      // chart.axis('xDim', {
      //   line: {
      //     lineWidth: 2, // 设置线的宽度
      //   },
      // });
      chart.col('value', {
        type: 'linear',
        // min: 0, 
        // max: 30,
        // alias: '血糖值',
      })
      // chart.cols({
      //   'type': {
      //     type: 'linear', // 声明 type 字段为分类类型
      //     values: ['餐前', '餐后', '睡前', '睡后'], // 重新显示的值
      //     alias: '类型' // 设置属性的别名
      //   },
      //   'value': {
      //     type: 'linear'
      //   }
      // });
      chart.col('time', {
        type: 'time',
      })
      chart.line().position('time*value').shape(props.shape).size(2);
      chart.render();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shape !== this.props.shape) {
      this.chart.clear();
      this.chart.line().position('time*value').shape(nextProps.shape).size(2);
      this.chart.render();
    }
  }

  render() {
    return (<this.Chart {...this.props} />);
  }
}

@observer
class MyComponent extends Component {
  state = {
    shape: 'spline',
    width: 550,
    height: 450,
    plotCfg: {
      margin: [20, 100, 50, 120],
    },
  }
  changeHandler = () => {
    this.setState({
      shape: 'line',
    });
  }
  render() {
    let data = PatientRecord.bloodGlu.data.slice();
    data = data.map(d => {
      d = Object.assign({}, { 'time': d.datetime, 'value': d.value, 'stateType': "餐前血糖" });
      return d;
    }) 
    let frame = new Frame(data);
    frame = Frame.combinColumns(frame,['餐前血糖','餐后血糖'],'value','type');
    return <div>
      <HigherChart
        shape={this.state.shape}
        data={frame}
        width={this.state.width}
        height={this.state.height}
        plotCfg={this.state.plotCfg}
      />
      <button onClick={this.changeHandler}>Change shape</button>
    </div>
  }
}

export default MyComponent;