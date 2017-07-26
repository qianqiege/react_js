// TDS数字中医表格
import React from 'react';
import { Link } from 'react-router';
import { Table, Input, Icon, Button} from 'antd';
import { observer } from 'mobx-react';
import UserList from 'models/UserList';


@observer
class TDS extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '编号',
      dataIndex: 'id',
      width: '20%',
    }, {
      title: '检测时间',
      dataIndex: 'created_at',
    }, {
      title: '查看记录',
      dataIndex: 'record',
      render: (text, record, index) => {
        console.log(record.report_url);
        return (
          <a href={record.report_url} target="_blank">查看记录</a>
          );
      },
    }];

  }


  componentDidMount(){
    const { uid } = UserList.userInfo;
    UserList.selfT(`http://qolm.ybyt.cc/api/v1/tds/check?patient_id=${uid}`);

  }

  render() {
    const dataSource = UserList.selfTDS;
    const columns = this.columns;
    return (
      <div>
        <Table bordered 
        columns={columns}  
        className="table"
        dataSource={dataSource}
        />
      </div>
    );
  }
}

export default TDS;
