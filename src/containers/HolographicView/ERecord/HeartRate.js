import React from "react";
import { Table} from "antd";
import PatientRecord from 'models/PatientRecord';
import HeartRateChart from "../Chart/HeartRateChart";

const columns = [{
  key:'0',
  title: '监测日期',
  dataIndex: 'updated_at',
}, {
  key:'1',
  title: '  心率 (次/分)',
  dataIndex: 'value',
}, {
  key:'2',
  title: '是否异常',
  dataIndex: 'status',
}];


class HeartRate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data=PatientRecord.heartRate.data.slice();
    return ( <div style={{}}>
            <HeartRateChart />
            <Table bordered
              columns={columns}
              dataSource={data}
               />
            </div>
    );
  }
}
export default HeartRate;