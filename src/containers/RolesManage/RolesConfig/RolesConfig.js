import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import { observer } from 'mobx-react';
import AddRole from './AddRole';
import DeleteRole from './DeleteRole';
import EditRole from './EditRole';
import '../CustomTable.scss';

@observer
class CustomTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '编号',
      dataIndex: 'number',
      width: '30%',
    }, {
      title: '角色名称',
      dataIndex: 'role',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {
        return (
        	<span>
        		<EditRole/>,<DeleteRole/>
        	</span>
            
          )
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        number: '1',
        role: 'test1',
      }, {
        key: '1',
        number: '2',
        role: 'test2',
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
      <h1 style={{marginBottom:50}} >角色配置</h1>
        <AddRole/>,
        <Table bordered dataSource={dataSource} columns={columns}  className='table'/>
      </div>
    );
  }
}

export default CustomTable;
