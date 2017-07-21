// 健康管理师列表页
import cookie from 'js-cookie';
import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, Input, Icon, Button,Pagination } from 'antd';
import { observer } from 'mobx-react';
import $ from "jquery";
import './ManageList.css';
import AddPermiss from './AddPermiss';
import UserMana from 'models/UserMana';
import '../CustomTable.scss';
const Search = Input.Search;

@observer
class ManageList extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '姓名',
      dataIndex: 'name',
      width: '30%',
      key:'0',
    }, {
      title: 'ID',
      dataIndex: 'id',
      key:'1',
    }, {
      title: '操作',
      dataIndex: 'operation',
      key:'2',
      render: (text, record, index) => {
        return (<AddPermiss store={record.id} />);
      }
    }];
   this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    UserMana.getManaList('http://qolm.ybyt.cc/api/v1/users/all_users?page=1&per_page=8');
  }

  handleSearch(value) {
    const reg = /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/;
    if( reg.test(value) ) {
      UserMana.getRoleList(`http://qolm.ybyt.cc/api/v1/users/get_user_by_id_number?id_number=${value}`);
      //console.log('success');
      const data = UserMana.RoleList.toJS();
      // console.log(data);
      // console.log(data[0].name);
      $('.table tbody tr:first-child td:first-child').text(data[0].name);
      $('.table tbody tr:first-child td:nth-child(2)').text(data[0].id); 
      $('.table tbody tr:first-child').nextAll().hide();
    }else{
      alert("身份证格式不正确");
      $('.table tbody tr:first-child td:first-child').text('暂无搜索结果');
      return;
    }
  }

  render() {  
    const columns = this.columns;
    const dataSource = UserMana.ManaList.toJS();
    return (
      <div>
        <h1>健康管理师列表</h1>
        <Search className="search" 
          style={{width: 450,height:35,marginTop:50,marginLeft:30,border:0,borderBottom:0}}
           onSearch={this.handleSearch}/>
        <hr/>
        <Table bordered 
        dataSource={dataSource} columns={columns} 
        style={{marginTop:50}}  className="table"
        pagination={{ 
          total:UserMana.totalData.total,
          pageSize:8,
          onChange(pageNumber) {
              //console.log('Page: ', pageNumber);
              UserMana.getManaList(
                `http://qolm.ybyt.cc/api/v1/users/all_users?page=${pageNumber}&per_page=8`);
          }
        }}/>  
        
      </div>
    );  
  }
}
export default ManageList;   