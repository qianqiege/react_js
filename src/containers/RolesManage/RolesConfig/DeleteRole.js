import React, { PropTypes } from "react";
// import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { Icon,Modal, Button } from 'antd';
import RoleConfig from 'models/rolesConfig';
// import UserRoleConfig from 'models/UserRoleConfig';
import '../CustomTable.scss';

@observer
class DeleteRole extends React.Component {
  static propTypes = {
    store: PropTypes.string,
  }
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
    RoleConfig.deleteRoles(this.props.store.id);
  }
  handleCancel = () => {
    //console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <span className="showBtn" onClick={this.showModal}>删除</span>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <Icon type="exclamation-circle-o" style={{fontSize:"4rem", color:'orange',display: "block"}}/>
          <p style={{fontSize:"1.3rem", marginTop:"1rem", textAlign: "center"}}>您确定吗？</p>
          <p style={{fontSize:".9rem", textAlign: "center"}}>您选择的角色将被删除！</p>
        </Modal>
      </div>
    );
  }
}


export default DeleteRole;
