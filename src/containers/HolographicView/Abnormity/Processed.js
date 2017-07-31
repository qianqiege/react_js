import React, { PropTypes } from "react";
import { Table, Row, Col} from "antd";
import { observer } from "mobx-react";
import HolographyData from "models/HolographyData";

import "../HolographicView.scss";

const columns = [{
  title: '时间',
  dataIndex: 'updated_at',
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


// const data = [{
//   key: '1',
//   time: '2017-06-20',
//   healthObj: '心率',
//   surveyData: 56,
//   Condition: '偏低',
//   dealingStatus: '已处理'

// }, {
//   key: '2',
//   time: '2017-06-20',
//   healthObj: '心率',
//   surveyData: 56,
//   Condition: '偏低',
//   dealingStatus: '已处理',

// }, {
//   key: '3',
//   time: '2017-06-20',
//   dealingStatus: '已处理',
//   healthObj: '心率',
//   surveyData: 56,
//   Condition: '偏低',
//   dealingStatus: '未处理',

// }];
// rowSelection object indicates the need for row selection
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
    
//   },
// };


@observer
class Holo extends React.Component {
  static propTypes = {
    store: PropTypes.string,
  }
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    const id = this.props.store;
    HolographyData.get(`http://qolm.ybyt.cc/api/v1/exception/by_id?id=${id}&is_handle=1&page=1&per_page=10`);
  }
	render() {
    const data = HolographyData.exDataTwo.data.slice();
		return ( <div className="pend-block">
				<Row>
					<Col span={21}>
						<h3>已处理异常</h3>
						<Table columns={columns} dataSource={data} style={{textAlign: "center"}}/>
					</Col>
				</Row>
			</div>
		);
	}
}
export default Holo;