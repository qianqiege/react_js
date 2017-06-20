import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'antd';

import "./PatientList.scss";

const Search = Input.Search;

class PatientList extends React.Component{
  render() {
    return (
      <div className="record-content">
        <h1 >客户列表</h1>
      	<span>
      		<Search style={{ width: 450,height:35,marginLeft:130,border:0,borderBottom:0}} onSearch={value => console.log(value)}/>  
      	</span>
        <a className="p-list-btn" href="/recordManage/newRecord" style={{ height:35,marginTop:1,marginRight:50}}>添加新客户</a>
        <p style={{fontSize:16,marginLeft:100,marginTop:30,marginBottom:15}}>客户信息</p>
        <hr style={{fontSize:16,marginLeft:100,marginTop:15,}}/>
        <p style={{fontSize:16,marginLeft:100,marginTop:15}}>没有查看权限</p>
      </div>
    );
  }
}

export default PatientList;
