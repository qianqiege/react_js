import React from "react";
import { Table, Row, Col } from "antd";
import "../HolographicView.scss";


const columns = [{
  title: '时间',
  dataIndex: 'time',
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
  dealingStatus: '已处理'

}, {
  key: '2',
  time: '2017-06-20',
  healthObj: '心率',
  surveyData: 56,
  Condition: '偏低',
  dealingStatus: '已处理',

}, {
  key: '3',
  time: '2017-06-20',
  healthObj: '心率',
  surveyData: 56,
  Condition: '偏低',
  dealingStatus: '未处理',

}];

class ProcessedException extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return ( <div className="pend-block">
				<Row>
					<Col span={16}>
						<h3>已处理异常</h3>
						<Table columns={columns} dataSource={data} />
					</Col>
				</Row>
			</div>
		);
	}
}
export default ProcessedException;