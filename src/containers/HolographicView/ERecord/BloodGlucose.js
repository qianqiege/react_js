import React from "react";
import { Table } from "antd";
import PatientRecord from 'models/PatientRecord';

const columns = [{
  key:'0',
  title: '监测日期',
  dataIndex: 'updated_at',
}, {
  key:'1',
  title: '血糖值',
  dataIndex: 'value',
}, {
  key:'2',
  title: '是否异常',
  dataIndex: 'status1',
}];


class BloodGlucose extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data=PatientRecord.bloodGlu.data.slice();
    return ( <div style={{}}>
            <Table bordered
              columns={columns}
              dataSource={data}
               />
            </div>
    );
  }
}
export default BloodGlucose;