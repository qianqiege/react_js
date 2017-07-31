import React from "react";
import { Table } from "antd";
import PatientRecord from 'models/PatientRecord';
import TemperatureChart from "../Chart/TemperatureChart";

const columns = [{
  key:'0',
  title: '监测日期',
  dataIndex: 'updated_at',
}, {
  key:'1',
  title: '体温 (°C)',
  dataIndex: 'value',
}, {
  key:'2',
  title: '是否异常',
  dataIndex: 'status',
}];


class Temperature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data=PatientRecord.temperature.data.slice();
    return ( <div style={{}}>
            <TemperatureChart />
            <Table bordered
              columns={columns}
              dataSource={data}
               />
            </div>
    );
  }
}
export default Temperature;