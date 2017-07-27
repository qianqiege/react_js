// 健康管理师页面 的添加权限组件
import React from 'react';
//import ReactDOM from 'react-dom';
import { Checkbox,Modal, Button,  Form} from 'antd';
import { observer } from 'mobx-react';
// import UserMana from 'models/UserMana';
import RolesConfig from 'models/rolesConfig';
import User from 'models/User';

// import $ from "jquery";

import '../CustomTable.scss';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

@observer
class AddRole extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
    RolesConfig.getRolesList();
    User.get_user(this.props.store);
  }

  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        //console.log(values, this.props.store);
        User.update_user(this.props.store, values);
      }
      this.setState({
        visible: false,
      });
    });
  }

  handleCancel = () => {
    //console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const role_ids = User.role_ids.toJS();
    const options = RolesConfig.rolesLists.data.toJS();
    const arr = options.map((option) => {
      return { label: option.name, value: option.id };
    });
    return (
      <div>
        <Button className="addrole" type="primary" style={{height:35}} 
        onClick={this.showModal}>添加权限</Button>
        <Modal
          title="添加用户权限"
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          className="addrole"
        >
        <br/>
        <br />
        <p className="choose">用户名</p>
        <br/>
        
        <Form onSubmit={this.handleSubmit}>        
        <FormItem>
          {getFieldDecorator('role_ids', {
          rules: [{ required: false, message: '' }],
          initialValue: role_ids,
        })(
          <CheckboxGroup options={arr} className="Checkbox" />
        )}
        </FormItem>
        </Form>
        <br /> 
        <br/>
        <br/>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(AddRole);
