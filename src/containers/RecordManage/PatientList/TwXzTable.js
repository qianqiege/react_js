// 体温检测的检测日志的表格组件
import React from 'react';
//import ReactDOM from 'react-dom';
import { Table } from 'antd';
import { observer } from 'mobx-react';
import UserList from 'models/UserList';


@observer
class TwXzTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '监测日期',
      dataIndex: 'datetime',
      width: '40%',
    }, {
      title: '体温(℃)',
      dataIndex: 'value',
    }, {
      title: '是否异常',
      dataIndex: 'status',
    }];

  }

  componentDidMount(){
    const { uid } = UserList.userInfo;
    const currDate =new Date().toLocaleDateString();
    UserList.selfTw(`http://qolm.ybyt.cc/api/v1/examination_check/temperature?patient_id=${uid}&start_date=2016-01-01&end_date=${currDate}&page=1&per_page=10`);

  }

  onCellChange = (index, key) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      dataSource[index][key] = value;
      this.setState({ dataSource });
    };
  }

  render() {
    const dataSource = UserList.selfTiwen;
    const columns = this.columns;
    const { uid } = UserList.userInfo;
    const currDates =new Date().toLocaleDateString();
    return (
      <div>
        <Table bordered 
        dataSource={dataSource} 
        columns={columns}  
        className="table"
        pagination={{
          total:UserList.stwTotal.total,
          onChange(pageNumber) {
              UserList.selfTw(`http://qolm.ybyt.cc/api/v1/examination_check/temperature?patient_id=${uid}&start_date=2016-01-01&end_date=${currDates}&page=${pageNumber}&per_page=10`);
          }
        }}        
        />
      </div>
    );
  }
}

export default TwXzTable;
