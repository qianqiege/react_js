// 健康管理师列表页
import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import { observer } from 'mobx-react';
// import '../CustomTable.scss';
import './ManageList.css';
import AddPermiss from './AddPermiss';
const Search = Input.Search;

@observer
class ManageList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
	      <div>
          <h1>健康管理师列表</h1>
	      	<Search className='search' style={{width: 450,height:35,marginTop:50,marginLeft:30,border:0,borderBottom:0}}
			       onSearch={value => console.log(value)}/>
          <hr/>
          <ul className='manalist'>
            <li >
              <ul>
                <li>
                  <Icon className='iconuser' type="user" />
                </li>
                <li>
                  袁延强
                  <div >                
                    <Icon className='user'  type="user" />
                    <span className='spannum'>58</span>
                  </div>
                </li>
                <li className='listuser'>
                  <AddPermiss/>
                </li>
              </ul>
            </li> 
            <li style={{marginTop:30}}>
              <ul>
                <li>
                  <Icon className='iconuser' type="user"/>
                </li>
                <li>
                  袁延强
                  <div >                
                    <Icon className='user' type="user" />
                    <span className='spannum'>58</span>
                  </div>
                </li>
                <li className='listuser'>
                  <AddPermiss/>
                </li>
              </ul>
            </li> 
          </ul> 
	      </div>
    );
  }
}
export default ManageList;