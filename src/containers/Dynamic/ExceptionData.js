// 异常处理页面
import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Button} from 'antd';
import { observer } from 'mobx-react';
import { Link } from 'react-router';

@observer
class ExceptionData extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '姓名',
      dataIndex: 'name',
      width: '20%',
    }, {
      title: '检测项目',
      dataIndex: 'prog',
    }, {
      title: '体征值',
      dataIndex: 'number',
    },{
      title: '异常状态',
      dataIndex: 'abnormal',
    },{
      title: '检测时间',
      dataIndex: 'date',
    },{
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {
        return (
            <Button type='primary'>
              <Link to={'/holographicView'}>处理异常</Link>
            </Button>
          )
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        name: '房鸣鸣',
        prog: '收缩压/舒张压',
        number:'124/54',
        abnormal:'正常/偏低',
        date:'2017-06-21',
      }, {
        key: '1',
        name: '房鸣鸣',
        prog: '收缩压/舒张压',
        number:'124/54',
        abnormal:'正常/偏低',
        date:'2017-06-21',
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
        <h1>异常管理</h1>
        <p style={{marginTop:50,marginLeft:30,marginBottom:30,fontSize:26}}>最新异常信息</p>
        <Table  bordered dataSource={dataSource} columns={columns} style={{marginLeft:30}} className='table'/>
      </div>
    );
  }
}

export default ExceptionData;
