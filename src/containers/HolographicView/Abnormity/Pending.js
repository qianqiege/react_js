import React from "react";
import { Table, Row, Col, Input, Checkbox, Button } from "antd";
import "../HolographicView.scss";


const columns = [{
  title: '时间',
  dataIndex: 'time',
  render: text => <a href="#">{text}</a>,
}, {
  title: '居家健康项目',
  dataIndex: 'healthObj',
}, {
  title: '监测数据',
  dataIndex: 'surveyData',
}, {
  title: '异常情况',
  dataIndex: 'Condition',
}, {
  title: '处理情况',
  dataIndex: 'dealingStatus',
}];



const data = [{
  key: '1',
  time: '2017-06-20',
  healthObj: '心率',
  surveyData: 56,
  Condition: '偏低',
  dealingStatus: '未处理'

}, {
  key: '2',
  time: '2017-06-20',
  healthObj: '心率',
  surveyData: 56,
  Condition: '偏低',
  dealingStatus: '未处理',

}, {
  key: '3',
  time: '2017-06-20',
  dealingStatus: '未处理',
  healthObj: '心率',
  surveyData: 56,
  Condition: '偏低',
  dealingStatus: '未处理',

}];
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

class Holo extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		console.log(`checked = ${e.target.checked}`);
	}
	render() {
		return ( <div className="pend-block">
				<Row>
					<Col span={16}>
						<h3>待处理异常</h3>
						<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
					</Col>
						<Col span={7} style={{marginLeft: 20}}>
						<h3>处理异常</h3>
						<div className="mar-top">
							<Checkbox onChange={this.handleChange}>微信</Checkbox>
							<Checkbox onChange={this.handleChange}>短信</Checkbox>
						</div>
						<Input type="textarea" rows={6} />
            <Button type="primary">提交</Button>
					</Col>
				</Row>
			</div>
		)
	}
}
export default Holo;