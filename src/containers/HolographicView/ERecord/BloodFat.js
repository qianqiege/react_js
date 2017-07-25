import React from "react";
import { Table } from "antd";
import PatientRecord from 'models/PatientRecord';
import BloodFatChart from "../Chart/BloodFatChart";
const columns = [{
  key:'0',
  title: '监测日期',
  dataIndex: 'updated_at',
}, {
  key:'1',
  title: '  血脂值 (mmol/L)',
  dataIndex: 'value',
}, {
  key:'2',
  title: '是否异常',
  dataIndex: 'status1',
}];


class BloodFat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data=PatientRecord.bloodfat.data.slice();
    return ( <div style={{}}>
            <BloodFatChart />
            <Table bordered
              columns={columns}
              dataSource={data}
               />
            </div>
    );
  }
}
export default BloodFat;