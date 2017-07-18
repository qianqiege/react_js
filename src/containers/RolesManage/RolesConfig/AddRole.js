// 角色配置页面的添加角色按钮弹出来的组件模块
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Modal, Button, Input} from 'antd';
import { observer } from 'mobx-react';
// import UserRoleConfig from 'models/UserRoleConfig';
import RoleConfig from 'models/rolesConfig';
import '../CustomTable.scss';

const CheckboxGroup = Checkbox.Group;

@observer
class AddRole extends React.Component {
  state = { visible: false, name: "" }
  showModal = () => {
    this.setState({
      visible: true,
    }); 
    RoleConfig.fetchRoles();    
  }
  handleOk = (e) => {
    if(!this.state.name) {
      alert("名称不能为空");
    }else if(!RoleConfig.abilities.toJS().length) {
      alert("请选择角色权限");
    }else {
      RoleConfig.addRoles({name: this.state.name, checked_features: RoleConfig.abilities.toJS()});
      this.setState({
        visible: false,
      });
    }
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false, 
    });
  }
  handleChange(values) {
    console.log(values);
    RoleConfig.abilities = values;
  }
  handleRoles(e) {
    this.setState({
      name: e.target.value,
    })
  }
  render() {
    const options = RoleConfig.options.toJS();
    return (
      <div>
        <Button type="primary" className='showmodal' onClick={this.showModal}>添加角色</Button>
        <Modal
          title="添加角色"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          className='addrole'
        >
         <Input onChange={this.handleRoles.bind(this)} placeholder="角色名称" className='role_name' type="text" required />
        <br/>
        <br />
        <p className='choose titleAbilities'>选择角色权限</p>
        <br/>
        <CheckboxGroup options={options} className='checkBox' onChange={this.handleChange}/>
        <br />

        
        <br/>
   
        <br/>
        </Modal>
      </div>
    );
  }
}
export default AddRole;