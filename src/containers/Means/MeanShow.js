import React from "react";
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import { observer } from "mobx-react";
import MeansInfo from 'models/MeansInfo';

@observer
class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '产品名',
      dataIndex: 'name',
      width: '30%',
    }, {
      title: '产品编号',
      dataIndex: 'identifier',
    }, {
      title: '用法',
      dataIndex: 'usage',
    }, {
      title: '数量',
      dataIndex: 'count',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {
        return (
            <Popconfirm title="确定要删除吗?" onConfirm={() => this.onDelete(index)}>
              <a href="#">删除</a>
            </Popconfirm>
        );
      },
    }];

    this.state = {
      count: 2,
      dataSource: []
    };
  }

  onDelete = (index) => {
    MeansInfo.deletePro(index);
  }
  render() {
    const dataSource = MeansInfo.kaifang.toJS();
    const columns = this.columns;
    return (
      <div>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default EditableTable;
