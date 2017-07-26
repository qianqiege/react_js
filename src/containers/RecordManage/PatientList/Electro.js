// 心电图展示
import React from 'react';
import { Link } from 'react-router';
import { Table, Input, Icon, Button} from 'antd';
import { observer } from 'mobx-react';
import UserList from 'models/UserList';


@observer
class Electro extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '体检类型',
      dataIndex: 'test_type',
      width: '20%',
    }, {
      title: '检测时间',
      dataIndex: 'datetime',
    }, {
      title: '查看记录',
      dataIndex: 'record',
      render: (text, record, index) => {
        return (
          <a href={record.value} target="_blank">查看记录</a>
          );
      },
    }];

  }


  componentDidMount(){
    const { uid } = UserList.userInfo;
    const currDate =new Date().toLocaleDateString();
    UserList.selfEc(`http://qolm.ybyt.cc/api/v1/examination_check/ecg?patient_id=${uid}&start_date=2016-01-01&end_date=${currDate}&page=1&per_page=10`);

  }
  onCellChange = (index, key) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      dataSource[index][key] = value;
      this.setState({ dataSource });
    };
  }

  render() {
    const dataSource = UserList.selfEcg;
    const columns = this.columns;
    const { uid } = UserList.userInfo;
    const currDates =new Date().toLocaleDateString();
    return (
      <div>
        <Table bordered 
        columns={columns}  
        className="table"
        dataSource={dataSource}
        pagination={{
          total:UserList.secgTotal.total,
          onChange(pageNumber) {
              UserList.selfEc(`http://qolm.ybyt.cc/api/v1/examination_check/ecg?patient_id=${uid}&start_date=2016-01-01&end_date=${currDates}&page=${pageNumber}&per_page=10`);
          }
        }}
        />
      </div>
    );
  }
}

export default Electro;
