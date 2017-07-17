// 血压检测/血糖检测的检测日志的表格组件
import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import { observer } from 'mobx-react';


@observer
class TwXzTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '监测日期',
      dataIndex: 'date',
      width: '40%',
    }, {
      title: '体温 (°C)',
      dataIndex: 'temper',
    }, {
      title: '是否异常',
      dataIndex: 'abnormal',
    }];

    this.state = {
      dataSource: [{
        key: '0',
        date: '2017-06-14 16:04:58',
        temper: '36.8',
        abnormal: '正常',
      }, {
        key: '1',
        date: '2017-06-09 16:03:22',
        temper: '36.8',
        abnormal: '正常',
      }],
      count: 2,
    };
  }
  onCellChange = (index, key) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      dataSource[index][key] = value;
      this.setState({ dataSource });
    };
  }
  onDelete = (index) => {
    const dataSource = [...this.state.dataSource];
    dataSource.splice(index, 1);
    this.setState({ dataSource });
  }
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Table bordered dataSource={dataSource} columns={columns}  className='table'/>
      </div>
    );
  }
}

export default TwXzTable;
