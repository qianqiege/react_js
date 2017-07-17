import React from 'react';
import { observer } from 'mobx-react';
import { Input, Button, Row, Col } from 'antd';

import CustomTable from 'components/CustomTable';
import StringFilterDropdown from 'components/StringFilterDropdown';
import DateTimeFilterDropdown from 'components/DateTimeFilterDropdown';
import User from 'models/User';
import NewButtonModal from './NewButtonModal';

const InputGroup = Input.Group;
const ButtonGroup = Button.Group;

@observer
export class UsersPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleTableChange = this.handleTableChange.bind(this);
  }

  componentDidMount() {
    User.fetchUsers();
  }

  handleTableChange(pagination, filters = {}, sorter = {}) {
    const pageParams = { page: pagination.current, per_page: pagination.pageSize };
    const filtersField = {};
    if(Object.keys(filters).length !== 0) {
      // enum filters
      [{
        key: "roles", filterParams: "roles_in"
      }].map(item => {
        if(filters[item.key]){
          filtersField[`q[${item.filterParams}]`] = filters[item.key];
        }
      });

      // date range filter
      ['created_at'].map(item => {
        if(filters[item]){
          filtersField[`q[${item}_gteq]`] = filters[item][0];
          filtersField[`q[${item}_lteq]`] = filters[item][1];
        }
      });

      // string filter
      ['name'].map(item => {
        if(filters[item]){
          filtersField[`q[${item}_cont]`] = filters[item];
        }
      });
    }
    const sortParams = {};
    if (Object.keys(sorter).length !== 0) {
      const sortMethod = sorter.order === "descend" ? "desc" : "asc";
      sortParams['sorts'] = `${sorter.columnKey} ${sortMethod}`;
    }

    const params = Object.assign({}, pageParams, filtersField, sortParams);
    User.fetchUsers(params);
  }

  handleDelete = (id) => {
    User.destroy(id);
  }

  render() {
    const { list: { data, meta, isFetching } } = User;
    const roleFilter = [{
      text: '管理员',
      value: 'admin'
    },{
      text: "普通用户",
      value: "normal"
    }];
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "邮箱",
        dataIndex: "email",
        key: "email"
      },
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        sorter: true,
        filterDropdown: <StringFilterDropdown columnKey={"name"}/>
      },
      {
        title: "角色",
        dataIndex: "roles",
        key: "roles",
        sorter: true,
        filters: roleFilter
      },
      {
        title: "创建时间",
        dataIndex: "created_at",
        key: "created_at",
        sorter: true,
        filterDropdown: <DateTimeFilterDropdown columnKey={"created_at"}/>
      },
      {
        title: '操作',
        key: 'operation',
        render: (value, record) => (
          <ButtonGroup>
            <Button type="primary">编辑</Button>
            <Button type="ghost" onClick={() => this.handleDelete(record.id)}>删除</Button>
          </ButtonGroup>
        )
      }
    ];

    const pagination = {
      showSizeChanger: true,
      total: meta.total,
      pageSize: meta.perPage,
      pageSizeOptions: ['1','10','20','40']
    };
    return (
      <div>
        <Row>
          <Col span={8}>
            <div style={{ marginBottom: 16 }}>
              <NewButtonModal />
            </div>
          </Col>
          <Col span={8} offset={8}>
            <div>
              <InputGroup className="ant-search-input">
                <Input placeholder="高级搜索"/>
                <div className="ant-input-group-wrap">
                  <Button icon="search" className="ant-search-btn" />
                </div>
              </InputGroup>
            </div>
          </Col>
        </Row>

        <CustomTable
          columns={columns}
          dataSource={data.toJS()}
          pagination={pagination}
          rowKey={(record) => record.id}
          loading={isFetching}
          onChange={this.handleTableChange}
          bordered
        />
      </div>
    );
  }
}

export default UsersPage;
