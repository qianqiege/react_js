import React from "react";
import { Table, Row, Col } from "antd";
import PatientRecord from 'models/PatientRecord';
import BloodGlucoseChart from "../Chart/BloodGlucoseChart";

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
      <Row>
        <Col xs={{ span: 12}}>
          <Table bordered
              columns={columns}
              dataSource={data}
               />
            
        </Col>
        <Col xs={{ span: 12}}>
          <BloodGlucoseChart />
        </Col>
      </Row>
    </div>        
    );
  }
}
export default BloodGlucose;