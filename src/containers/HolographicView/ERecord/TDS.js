import React from "react";
import { Table, Button } from "antd";
import PatientRecord from 'models/PatientRecord';

const columns = [{
  key:'0',
  title: '编号',
  dataIndex: 'id',
}, {
  key:'1',
  title: '检测时间',
  dataIndex: 'created_at',
}, {
  key:'2',
  title: '请求地址',
  dataIndex: 'report_url',
},{
  key:'3',
  title: '查看记录',
  dataIndex: 'get_jsonResult',
  render: () => (
    <Button type="primary">查看记录</Button>
  ),
}];



class TDS extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data=PatientRecord.tds.data;
    return ( <div style={{}}>
            <Table bordered
              columns={columns}
              dataSource={data}
               />
            </div>
    );
  }
}

export default TDS;