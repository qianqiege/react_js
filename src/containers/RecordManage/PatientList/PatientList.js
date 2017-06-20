import React from 'react';
import ReactDOM from 'react-dom';
import { Input,Icon,Button } from 'antd';
import { observer } from 'mobx-react';
import TimeLine from './TimeLine';
import "./PatientList.scss";

const Search = Input.Search;
@observer
class PatientList extends React.Component{
  render() {
    return (
      <div >
        <h1 style={{marginBottom:50}}>客户列表</h1>
      	<span>
      		<Search className='search' style={{ width: 450,height:35,marginLeft:100,border:0,borderBottom:0}} onSearch={value => console.log(value)}/>  
      	</span>
        <a className="p-list-btn" href="/recordManage/newRecord" style={{ height:35,marginTop:1,marginRight:50}}>添加新客户</a>
        <p style={{fontSize:16,marginLeft:100,marginTop:30,marginBottom:15}}>客户信息</p>
        <hr style={{marginLeft:100,marginTop:15,}}/>
        <p style={{fontSize:16,marginLeft:100,marginTop:15}}>没有查看权限</p>

        <ul style={{marginLeft:20}}>
            <li >
              <ul style={{marginLeft:50}}>
                <li>
                  <Icon className='iconuser' type="user" style={{fontSize:35,marginLeft:19,color:'gray'}}/>
                </li>
                <li>
                  刘静静
                  <div >                
                    <Icon type="user" style={{fontSize:10,marginRight:5}}/>
                    <span  style={{fontSize:16}}>382</span>
                  </div>
                </li>
              </ul>
            </li> 
            <li className='listuser' style={{marginTop:10}}>
                <Button type='primary' style={{marginRight:30,height:35}} >全息档案</Button> 
                <Button type='primary' style={{ height:35}}>档案查看/修改</Button>
            </li>
          </ul> ,
          <p className='clear'>健康管理动态</p>
          <TimeLine/>
      </div>
    );
  }
}

export default PatientList;
