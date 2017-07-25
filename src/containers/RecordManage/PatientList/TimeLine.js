// 客户列表页的客户信息的时间轴
import React from 'react';
//import ReactDOM from 'react-dom';
import { Timeline } from 'antd';
import { observer } from 'mobx-react';
import UserList from 'models/UserList';
import { Link } from 'react-router';
import './PatientList.scss';
@observer 
class TimeLine extends React.Component{
  constructor(props) {
    super(props);
  }
  renderYB() {
    const { record_number } = UserList.userInfo;
    const { uid } = UserList.userInfo;
    return (
      record_number.map(num => {
        return (
          <div className="timeline-item">
            <div className="timeline-icon">
             
            </div>
            <div className="timeline-content">
              <h3>{ num.number }</h3>
              <p> 
                <Link className="btn" to={`/recordManage/healthmonitor?id=${uid}`}>查看健康体检数据</Link>
              </p>
              <p> 
                <Link className="pj" to={'/recordManage/evaluate'}>✿管理评价✿</Link>
              </p>              
            </div>
          </div>
        );
      })
    );
    
  }
  render(){
    return (
        <div className="container">
          <div id="timeline">
            { this.renderYB() }
          </div>
        </div>
    );
  }
}
export default TimeLine;