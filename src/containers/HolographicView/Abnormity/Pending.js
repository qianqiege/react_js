import React from "react";
import { Table, Row, Col, Input, Checkbox, Button } from "antd";
import { observer } from "mobx-react";
import HolographyData from "models/HolographyData";

import "../HolographicView.scss";


const columns = [{
  title: '时间',
  dataIndex: 'updated_at',
  render:  (text, record) => {
    return (
      <a href="#">{text}</a>
    );
  },
}, {
  title: '居家健康项目',
  dataIndex: 'test_item',
}, {
  title: '监测数据',
  children: [{
    dataIndex: 'value1',
    key: 'value1',
    width: 40,
    fixed: "bottom"
  },{
    dataIndex: 'value2',
    key: 'value2',
    width: 40,
  }],
}, {
  title: '异常情况',
  children: [{
      dataIndex: 'status1',
      key: 'status1',
      width: 40,
    }, {
      dataIndex: 'status2',
      key: 'status2',
      width: 40,
    }],
}, {
  title: '处理情况',
  dataIndex: 'handle',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    HolographyData.exceptionalData.ids = selectedRows;
  },
};

@observer
class Holo extends React.Component {
	constructor(props) {
		super(props);
    this.handleWechat = this.handleWechat.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleWechat(e) {
    e.target.checked ? HolographyData.exceptionalData.is_wechat = 1 : HolographyData.exceptionalData.is_wechat = 0;
  }
  handlePhone(e) {
    e.target.checked ? HolographyData.exceptionalData.is_phone = 1 : HolographyData.exceptionalData.is_phone = 0;
  }
  handleMessage(e) {
    e.target.value ? HolographyData.exceptionalData.health_advice = e.target.value : HolographyData.exceptionalData.health_advice = null;
  }
  handleClick() {
    let { ids, is_phone, is_wechat, health_advice } = HolographyData.exceptionalData;
    if( !ids ) {
      alert("请选择要处理的异常");
    }else if( !health_advice ) {
      alert("请输入建议信息");
    }else if( !is_wechat && !is_phone ) {
      alert("请选择提醒方式");
    }else{
      const ret = ids.map(i => {return i.id});
      var str = {"ids": ret, "is_wechart": is_wechat, "is_phone": is_phone, "health_advice": health_advice};
      HolographyData.putMessage("http://qolm.ybyt.cc/api/v1/exception/handle", JSON.stringify(str, null, 4));
    }
  }
  componentDidMount() {
    const id = this.props.store;
    HolographyData.getHolographyInfo(`http://qolm.ybyt.cc/api/v1/exception/by_id?id=${id}&is_handle=0&page=1&per_page=10`);
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
	render() {
    // let {is_phone, is_wechat} = HolographyData.exceptionalData;
    const data = HolographyData.exData.data.slice();
		return ( <div className="pend-block">
				<Row>
					<Col span={16}>
						<h3>待处理异常</h3>
						<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
					</Col>
						<Col span={7} style={{marginLeft: 20}}>
						<h3>处理异常</h3>
						<div className="mar-top">
							<Checkbox onChange={this.handleWechat} >微信</Checkbox>
							<Checkbox onChange={this.handlePhone} >短信</Checkbox>
						</div>
						<Input onChange={this.handleMessage} type="textarea" rows={6} />
            <Button type="primary" onClick={this.handleClick}>提交</Button>
					</Col>
				</Row>
			</div>
		);
	}
}
export default Holo;