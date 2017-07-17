import React from 'react';
import { Form, Input, Modal, Button, message } from 'antd';
import { observer } from 'mobx-react';

import User from 'models/User';

const FormItem = Form.Item;

@observer
class NewButtonModal extends React.Component {
  static propTypes = {
    form: React.PropTypes.object,
  };

  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleOk = () => {
    const { validateFields, resetFields } = this.props.form;
    validateFields((err, values) => {
      if (err) {
        message.error('请补全缺少字段');
      } else {
        User.create(values).then(() => {
          resetFields();
          message.info('创建成功');
          this.handleCancel();
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>新增</Button>
        <Modal
          visible={this.state.visible}
          title="新增用户"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
              保存
            </Button>,
          ]}
        >
          <Form onSubmit={this.handleOk}>
            <FormItem
              {...formItemLayout}
              label="E-mail"
              hasFeedback
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Name"
              hasFeedback
            >
              {getFieldDecorator('name', {
                rules: [{
                  required: true, message: 'Please input your Name!',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Password"
              hasFeedback
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="password" />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default Form.create()(NewButtonModal);
