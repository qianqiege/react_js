import React from "react";
import { Table } from "antd";
import PatientRecord from 'models/PatientRecord';
import UnineChart from "../Chart/UnineChart";

const columns = [{
  key:'0',
  title: '监测日期',
  dataIndex: 'updated_at',
}, {
  key:'1',
  title: ' 尿酸值 (mmol/L)',
  dataIndex: 'value',
}, {
  key:'2',
  title: '是否异常',
  dataIndex: 'status',
}];


class Unine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data=PatientRecord.unine.data.slice();
    return ( <div style={{}}>
            <UnineChart />
            <Table bordered
              columns={columns}
              dataSource={data}
               />
            </div>
    );
  }
}
export default Unine;