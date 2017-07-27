// 客户列表页的客户信息的时间轴
import React from 'react';
//import ReactDOM from 'react-dom';
// import { Timeline } from 'antd';
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
            <div className="timeline-content">
              <h3>{ num.number }</h3>
              <p> 
                <Link className="btn" to={`/recordManage/healthmonitor?id=${uid}`}>查看健康体检数据</Link>
              </p>
              <p> 
                <Link className="btn" to={'/recordManage/evaluate'}>管理评价</Link>
              </p>
              <p> 
                {num.disease_location_recipes.length != 0 ? <Link className="btn" to={`/means/lookMeans?id=${num.number}`}>疾病谱定位</Link> : null}
                {num.health_manage_recipes.length != 0 ? <Link className="btn" to={`/means/lookMeans?id=${num.number}`}>健康管理</Link> : null}
                {num.spine_recipes.length != 0 ? <Link className="btn" to={`/means/lookMeans?id=${num.number}`}>脊柱开方</Link> : null}
              </p>              
            </div>
          </div>
        );
      })
    );
    
  }
  render(){
    console.log(UserList.check_date.created_at);
    const { created_at } = UserList.check_date;
    return (
        <div className="container" style={{width: "100%"}}>
          <div id="timeline">
            { this.renderYB() }
          </div>
          <p className="firstRecord">
            首次建档于：{ created_at }
          </p>
        </div>
    );
  }
}
export default TimeLine;