// 异常处理页面
import React from 'react';
import {Table, Button } from 'antd';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import MeansInfo from 'models/MeansInfo';

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
      render: (text, record) => {
        return (
            <Button type="primary">
              <Link to={`/holographicView?id=${record.data}`}>处理异常</Link>
            </Button>
          );
      },
    }];

    this.state = {
      current: 1,
    };
  }

  componentDidMount(){
    MeansInfo.getUnnormal("http://qolm.ybyt.cc/api/v1/exception/data?page=1&per_page=10");
   
  }

 
  render() {
    const columns = this.columns;
    const dataSource = MeansInfo.exceptionInfo.data.toJS();
    return (
      <div>
        <h1>异常管理</h1>
        <p style={{marginTop:50,marginLeft:30,marginBottom:30,fontSize:26}}>最新异常信息</p>
        <Table  
        bordered dataSource={dataSource} 
        columns={columns} 
        style={{marginLeft:30}} 
        className="table"
        pagination={{
          total:MeansInfo.exceptionInfo.meta["total"],
          onChange(pageNumber) {
              MeansInfo.getUnnormal(`http://qolm.ybyt.cc/api/v1/exception/data?page=${pageNumber}&per_page=10`);
          }
        }}
        />
        
      </div>
    );
  }
}

export default ExceptionData;
