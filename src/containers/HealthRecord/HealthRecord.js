// 健康管理记录号页面
import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'antd';
import $ from "jquery";
import './HealthRecord.scss';
const Search = Input.Search;

class HealthRecord extends React.Component{
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(value) {
    $(".healthrecord").slideToggle();
    
    console.log(value);
  }
  render() {
    return (
      <div>
        <h1 className='role'>健康管理记录号</h1>
        <span className="inputNum" style={{marginLeft:30,fontSize:16}}>
          请输入身份证号码：&nbsp;&nbsp;&nbsp;&nbsp;
          <Search style={{ width: 450,height:35,marginTop:50,border:0,borderBottom:0 }} 
            onSearch={this.handleSearch}/>  
        </span>
        <p className='healthrecord' style={{display: 'none'}}>YB20170620886024</p >
      </div>
    );
  }
}

export default HealthRecord;
