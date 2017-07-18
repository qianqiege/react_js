// 角色配置页面的添加角色按钮弹出来的组件模块
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Modal, Button, Input} from 'antd';
import { observer } from 'mobx-react';
// import UserRoleConfig from 'models/UserRoleConfig';
import UserRoleConfig from 'models/rolesConfig';
import '../CustomTable.scss';

const CheckboxGroup = Checkbox.Group;

@observer
class AddRole extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    }); 
    UserRoleConfig.fetchRoles();    
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    // UserRoleConfig.getAddRole('http://qolm.ybyt.cc/api/v1/roles');
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false, 
    });
  }
  render() {
    const options = UserRoleConfig.options.toJS();
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
         <Input placeholder="角色名称" className='role_name' type="text" required />
        <br/>
        <br />
        <p className='choose titleAbilities'>选择角色权限</p>
        <br/>
        <CheckboxGroup options={options} className='checkBox'/>
        <br />

        
        <br/>
   
        <br/>
        </Modal>
      </div>
    );
  }
}
export default AddRole;