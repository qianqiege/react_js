// 角色配置页面的添加角色按钮弹出来的组件模块
import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox,Modal, Button, Input, Form } from 'antd';
import { observer } from 'mobx-react';
import RoleConfig from 'models/rolesConfig';
import '../CustomTable.scss';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

@observer
class AddRole extends React.Component {
  state = { visible: false, name: "" }
  showModal = () => {
    this.setState({
      visible: true,
    }); 
    RoleConfig.fetchRoles();
    RoleConfig.getRole(this.props.store.id);    
  }
  handleOk = (e) => {
      // this.handleSubmit();   
      console.log(this.props.store.id, RoleConfig.abilities.toJS());
      this.setState({
        visible: false,
      });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false, 
    });
  }
  handleChange(values) {
    // RoleConfig.abilities = RoleConfig.abilities.concat(values);
    console.log(values);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        RoleConfig.updateRoles(this.props.store.id, { "checked_features": values.rolePermission,"id": this.props.store.id })
      }
      this.setState({
        visible: false,
      });
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const options = RoleConfig.options.toJS();
    const { name, abilities } = RoleConfig.roleItem;
    return (
      <div>
        <Button type="primary" className='showmodal' onClick={this.showModal}>编辑</Button>
        <Modal
          title="添加角色"
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          className='addrole'
        >
          <Form onSubmit={this.handleSubmit}>        
            <FormItem>
              {getFieldDecorator('name', {
              rules: [{ required: false, message: '' }],
              initialValue: `${name}`,
            })(
              <Input className='role_name' type="text" readOnly />
            )}
            </FormItem>
            <FormItem>
              <p className='choose titleAbilities'>选择角色权限</p>
              {getFieldDecorator('rolePermission', {
              rules: [{ required: false, message: '' }],
              initialValue: abilities.features.toJS(),
            })(
              <CheckboxGroup options={options} className='checkBox' onChange={this.handleChange} />
            )}
            </FormItem>
          </Form>
        </Modal>
      </div>
      
    );
  }
}
export default Form.create()(AddRole); 