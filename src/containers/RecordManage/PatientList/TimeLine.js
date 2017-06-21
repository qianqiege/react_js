// 客户列表页的客户信息的时间轴
import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline } from 'antd';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import './PatientList.scss';
@observer 
class TimeLine extends React.Component{
  render(){
    return (
        <div className="container">
          <div id="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
               
              </div>
              <div className="timeline-content">
                <h3>YB20170605813985</h3>
                <p> 
                  <Link className="btn" to={'/recordManage/healthmonitor'}>查看健康体检数据</Link>
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                
              </div>
              <div className="timeline-content right">
                <h3>YB20170605813985</h3>
                <p> <Link className="btn" to={'/recordManage/healthmonitor'}>查看健康体检数据</Link></p>
                <p> <Link className="btn" to={'/recordManage/healthmonitor'}>查看健康体检数据</Link></p>
                <p> <Link className="btn" to={'/recordManage/healthmonitor'}>查看健康体检数据</Link></p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                
              </div>
              <div className="timeline-content">
                <h3>YB20170605813985</h3>
                <p> <Link className="btn" to={'/recordManage/healthmonitor'}>查看健康体检数据</Link></p>
                <p> <Link className="btn" to={'/recordManage/healthmonitor'}>查看健康体检数据</Link></p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default TimeLine;