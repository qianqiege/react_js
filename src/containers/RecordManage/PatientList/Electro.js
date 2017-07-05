// 心电图展示/TDS数字中医表格
import React from 'react';
import { Table, Button} from 'antd';
import { observer } from 'mobx-react';


@observer
class Electro extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '编号',
      dataIndex: 'number',
      width: '30%',
    }, {
      title: '检测时间',
      dataIndex: 'date',
    }, {
      title: '查看记录',
      dataIndex: 'record',
      render: () => {
        return (
         <Button type="primary">查看记录</Button>
          );
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        number: '1',
        date: '2017-04-19',
      }, {
        key: '1',
        number: '2',
        date: '2017-04-28',
      }],
      count: 2,
    };
  }
  onCellChange = (index, key) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      dataSource[index][key] = value;
      this.setState({ dataSource });
    };
  }
  onDelete = (index) => {
    const dataSource = [...this.state.dataSource];
    dataSource.splice(index, 1);
    this.setState({ dataSource });
  }
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Table bordered dataSource={dataSource} columns={columns}  className="table"/>
      </div>
    );
  }
}

export default Electro;
