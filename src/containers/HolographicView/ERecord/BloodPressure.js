import React from "react";
import { Table } from "antd";
import PatientRecord from 'models/PatientRecord';
import BloodPressureChart from "../Chart/BloodPressureChart";

const columns = [{
  key:'0',
  title: '监测日期',
  dataIndex: 'updated_at',
}, {
  key:'1',
  title: '收缩压',
  dataIndex: 'max_blood_pressure',
}, {
  key:'2',
  title: '舒张压',
  dataIndex: 'min_blood_pressure',
},{
  key:'3',
  title: '是否异常',
  children: [{
    dataIndex: 'status1',
    key: 'value1',
    width: 40,
    fixed: "bottom"
  },{
    dataIndex: 'status2',
    key: 'value2',
    width: 40,
  }],
}];


class BloodPressure extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data=PatientRecord.bloodPre.data.slice();
    return ( <div style={{}}>
            <BloodPressureChart style={{ width: "100%", height: "auto", }} />
            <Table bordered
              columns={columns}
              dataSource={data}
               />
            </div>
    );
  }
}
export default BloodPressure;