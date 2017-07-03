// 角色配置页面
import React from 'react';
import { Table } from 'antd';
import { observer } from 'mobx-react';
import AddRole from './AddRole';
import DeleteRole from './DeleteRole';
import EditRole from './EditRole';
import UserRoleConfig from 'models/UserRoleConfig';
import '../CustomTable.scss';

@observer
class CustomTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '编号',
      dataIndex: 'number',
      width: '30%',
      key:'0',
    }, {
      title: '角色名称',
      dataIndex: 'role',
      key:'1',
    }, {
      title: '操作',
      dataIndex: 'operation',
      key:'2',
      render: () => {
        return (
          <span className="inline">
            <EditRole/>&nbsp;<DeleteRole/>
          </span>   
        );
      }
    }];
  }
 
  componentDidMount() {
    UserRoleConfig.getRoleConfig('http://qolm.ybyt.cc/api/v1/roles?page=1&per_page=8');
  }

  render() {
    const columns = this.columns;
    const dataSource = UserRoleConfig.dataSource.toJS();
    return (
      <div>
      <h1 className="roleconfig">角色配置</h1>
        <AddRole  style={{marginButtom:50}}/>
        <Table bordered dataSource={dataSource} columns={columns} 
        style={{marginTop:50}}  className="table"/>
      </div>
    );
  }
}

export default CustomTable;
