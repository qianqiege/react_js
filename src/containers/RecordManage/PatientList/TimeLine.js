import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline } from 'antd';
import { observer } from 'mobx-react';
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
                <p> <a href="/recordManage/healthmonitor" className="btn">查看疾病谱定位报告</a></p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                
              </div>
              <div className="timeline-content right">
                <h3>YB20170605813985</h3>
                <p> <a href="" className="btn">查看疾病谱定位报告</a></p>
                <p> <a href="" className="btn">查看疾病谱定位报告</a></p>
                <p> <a href="" className="btn">查看疾病谱定位报告</a></p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                
              </div>
              <div className="timeline-content">
                <h3>YB20170605813985</h3>
                <p> <a href=""  className="btn">查看疾病谱定位报告</a></p>
                <p> <a href="" className="btn">查看疾病谱定位报告</a></p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default TimeLine;