// 客户列表页面
import React from 'react';
//import ReactDOM from 'react-dom';
import { Input,Icon,Button } from 'antd';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import UserList from 'models/UserList';
import  User  from  'models/User';
import  GetIdentityCard from  "models/GetIdentityCard";
import $ from "jquery";
import TimeLine from './TimeLine';
import "./PatientList.scss";

const Search = Input.Search;
@observer
class PatientList extends React.Component{
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    User.fetchUsers().then(() => {
      GetIdentityCard.getCard(`http://qolm.ybyt.cc/api/v1/examination_input/get_auto_identity_card?id=${User.current_user_info.id}`); 
      const {idcard}=GetIdentityCard.Idcard;
      if(idcard ==="no_id"){
      }else{
        $(".inpt-idcard .ant-input").val(idcard);
      }
    });
  }


  handleSearch(value) {
    const reg = /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/;
    if( reg.test(value) ) {
      UserList.getRecord(`http://qolm.ybyt.cc/api/v1/patient/get_by_id_number?id_number=${value}`);
      $(".showList").slideDown();
    }else{
      alert("身份证格式不正确");
      return;
    }
    
  }


  render() {
    const { uname } = UserList.userInfo;
    const { uid } = UserList.userInfo;
    return (
      <div >
        <h1 style={{marginBottom:50}}>客户列表</h1>
        <span>
          <Search className="search inpt-idcard" style={{ width: 450,height:35,marginLeft:100,border:0,borderBottom:0}} 
          onSearch={this.handleSearch}/>  
        </span>
        <Button className="p-list-btn" style={{ height:35,marginTop:1,marginRight:50}}>
          <Link to={"/recordManage/newRecord"}>添加新客户</Link>
        </Button>
        <p style={{fontSize:16,marginLeft:100,marginTop:30,marginBottom:15}}>客户信息</p>
        <hr style={{marginLeft:100,marginTop:15,}}/>
        <p style={{fontSize:16,marginLeft:100,marginTop:15,display:"none"}}>没有查看权限</p>
        <div className="showList" style={{display: "none"}}>
          <ul style={{marginLeft:20}}>
              <li >
                <ul style={{marginLeft:50}}>
                  <li>
                    <Icon className="iconuser" type="user" style={{fontSize:35,marginLeft:19,color:'gray'}}/>
                  </li>
                  <li>
                    {uname}
                    <div >                
                      <Icon type="user" style={{fontSize:10,marginRight:5}}/>
                      <span  style={{fontSize:16}}>{uid}</span>
                    </div>
                  </li>
                </ul>
              </li> 
              <li className="listuser" style={{marginTop:10}}>
                  <Button type="primary" style={{marginRight:30,height:35}} >
                    <Link to={`/holographicView?id=${uid}`}>全息档案</Link>
                  </Button> 
                  <Button type="primary" style={{ height:35}}>
                    <Link to={`/fileview?id=${uid}`}>档案查看/修改</Link>
                  </Button>
              </li>
            </ul> ,
            <p className="clear">健康管理动态</p>
            <TimeLine />
          </div>
      </div>
    );
  }
}

export default PatientList;
