import React from "react";
import { Table } from "antd";
import PatientRecord from 'models/PatientRecord';

const columns = [{
  key:'0',
  title: '监测日期',
  dataIndex: 'updated_at',
}, {
  key:'1',
  title: '体重',
  dataIndex: 'value',
}, {
  key:'2',
  title: '是否异常',
  dataIndex: 'status',
}];


class Weight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data=PatientRecord.weight.data.slice();
    return ( <div style={{}}>
            <Table bordered
              columns={columns}
              dataSource={data}
               />
            </div>
    );
  }
}
export default Weight;