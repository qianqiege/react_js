import React, { PropTypes } from "react";
import { Table } from "antd";
import PatientRecord from 'models/PatientRecord';

class TDSd extends React.Component {
  static propTypes = {
    location: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.columns = [{
      key:'0',
      title: '编号',
      dataIndex: 'id',
    }, {
      key:'1',
      title: '检测时间',
      dataIndex: 'created_at',
    },{
      key:'3',
      title: '查看记录',
      dataIndex: 'get_jsonResult',
      render: (text, record) => {
        // console.log(record.report_url);
        return (
          <a href={record.report_url} target="_blank">查看记录</a>
          );
      },
    }];
  }
  componentDidMount(){
    PatientRecord.getTDS(`http://qolm.ybyt.cc/api/v1/tds/check?patient_id=${this.props.store}`);
  }
  render() {
    const data=PatientRecord.selfTDS;
    const columns = this.columns;
    return ( <div style={{}}>
            <Table bordered
              columns={columns}
              dataSource={data}
               />
            </div>
    );
  }
}

export default TDSd;