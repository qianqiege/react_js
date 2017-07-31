import React from 'react';
import { Checkbox,Modal, Button, Input} from 'antd';
import { observer } from 'mobx-react';
import './CustomTable.css';
@observer
class AddRole extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = () => {
   
    this.setState({
      visible: false,
    });
  }


  render() {
    const CheckboxGroup = Checkbox.Group;
    function onChange() {
      
    }

    const options = [
    { label: '管理首页', value: '管理首页' },
    { label: '健康管理师首页', value: '健康管理师首页' },
    { label: '角色配置', value: '角色配置' },
    { label: '健康管理记录号', value: '健康管理记录号' },
    { label: '健康管理师列表', value: '健康管理师列表' },
    { label: '档案新建', value: '档案新建' },
    { label: '管理首页', value: '管理首页' },
    { label: '客户列表', value: '客户列表' },
    { label: '随访包测量', value: '随访包测量' },
  ];

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>添加角色</Button>
        <Modal
          title="添加角色"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          className="addrole"
        >
         <Input placeholder="角色名称" />
        <br/>
        <br/>
        <p className="choose">选择角色权限</p>
        <br/>
        <CheckboxGroup options={options} onChange={onChange} className="checkbox"/>
        <br/> 
        <br/>
        <br/>
        </Modal>
      </div>
    );
  }
}
export default AddRole;
