// 血糖检测的检测日志的表格组件
import React from 'react';
//import ReactDOM from 'react-dom';
import { Table } from 'antd';
import { observer } from 'mobx-react';
import UserList from 'models/UserList';
import PatientRecord from 'models/PatientRecord';
import BloodGlucoseChart from '../../HolographicView/Chart/BloodGlucoseChart';

@observer
class BloodSugarData extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '监测日期',
      dataIndex: 'datetime',
      width: '40%',
    }, {
      title: '血糖值',
      dataIndex: 'value',
    }, {
      title: '测量类型',
      dataIndex: 'test_type',
    }, {
      title: '是否异常',
      dataIndex: 'status1',
    }];

    this.state = {
      dataSource: [{
        key: '0',
        date: '2017-06-14 16:04:58',
        sblood: '89',
        dblood: '55',
        abnormal: '正常/偏低',
      }, {
        key: '1',
        date: '2017-06-09 16:03:22',
        sblood: '90',
        dblood: '55',
        abnormal: '正常/偏低',
      }],
      count: 2,
    };
  }

  componentDidMount(){
    const { uid } = UserList.userInfo;
    const currDate =new Date().toLocaleDateString();
    const staDate="2016-12-1";
    UserList.selfXt(`http://qolm.ybyt.cc/api/v1/examination_check/blood_glucose?patient_id=${uid}&start_date=2016-01-01&end_date=${currDate}&page=1&per_page=10`);
    PatientRecord.getBloodGlu(`http://qolm.ybyt.cc/api/v1/examination_check/blood_glucose?patient_id=${uid}&start_date=${staDate}&end_date=${currDate}&page=1&per_page=10`);
    
  }

  onCellChange = (index, key) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      dataSource[index][key] = value;
      this.setState({ dataSource });
    };
  }

  render() {
    const dataSource = UserList.selfXuetang.slice();
    const columns = this.columns;
    const { uid } = UserList.userInfo;
    const currDates =new Date().toLocaleDateString();
    return (
      <div>
        <BloodGlucoseChart />
        <Table bordered 
        dataSource={dataSource} 
        columns={columns}  
        className="table"
        pagination={{
          total:UserList.sxtTotal.total,
          onChange(pageNumber) {
              UserList.selfXt(`http://qolm.ybyt.cc/api/v1/examination_check/blood_glucose?patient_id=${uid}&start_date=2016-01-01&end_date=${currDates}&page=${pageNumber}&per_page=10`);
          }
        }}        
        />
      </div>
    );
  }
}

export default BloodSugarData;
