import React from "react";
import { Table } from "antd";
import PatientRecord from 'models/PatientRecord';

const columns = [{
  key:'0',
  title: '编号',
  dataIndex: 'id',
}, {
  key:'1',
  title: '检测时间',
  dataIndex: 'updated_at',
}, {
  key:'2',
  title: '查看记录',
  dataIndex: 'status1',
  render: (text, record) => {
      return (
        <a href={record.value}>查看记录</a>
      );
  },
}];


class Ecg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data=PatientRecord.ecg.data.slice();
    return ( <div style={{}}>
            <Table bordered
              columns={columns}
              dataSource={data}
               />
            </div>
    );
  }
}
export default Ecg;