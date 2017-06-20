// 健康管理记录号页面

import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'antd';
import './HealthRecord.scss';
const Search = Input.Search;

class HealthRecord extends React.Component{
	render() {
    return (
    	<div>
    		<h1 className='role'>健康管理记录号</h1>
      	<span className="inputNum" style={{marginLeft:30,fontSize:16}}>
      		请输入身份证号码：&nbsp;&nbsp;&nbsp;&nbsp;
      		<Search style={{ width: 450,height:35,marginTop:50,border:0,borderBottom:0 }} onSearch={value => console.log(value)}/>  
       	</span>
        <p className='healthrecord'>YB20170620886024</p>
      </div>
    );
  }
}

export default HealthRecord;
