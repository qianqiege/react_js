import React from 'react';
import { Modal } from 'antd';

class DeleteRole extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        
        <Modal
          title="删除"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        />
        
      </div>
    );
  }
}



export default DeleteRole;
