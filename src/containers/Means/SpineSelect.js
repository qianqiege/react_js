//这是筑脊模块页面

import React from 'react';
import { Table, Select } from 'antd';
import MeansJz from 'models/MeansJz';
import { observer } from "mobx-react";
import './spine.css';

const Option = Select.Option;

@observer
class SpineSelect extends React.Component{

  constructor(props){
    super(props);
    this.columns = [
    {
      title: '单次',
      dataIndex: 'only',
    }, {
      title: '首次疗程',
      dataIndex: 'firstOne',
    }, {
      title: '养护（第二次起）',
      dataIndex: 'curing',
    }];

    this.state = {
      disable:false,
      checked:false,
    };

  }
 
  componentDidMount() {
    MeansJz.getJibie("http://qolm.ybyt.cc/api/v1/spine/spine_level");
    MeansJz.getPay(`http://qolm.ybyt.cc/api/v1/spine/spine_level_charge?spine_level_id=4`);

  }
  onChange (e){
    this.setState({
      disable:e.target.checked,
    }); 
  }
  handleChange(value, option) {
    MeansJz.price.length = 0;
    MeansJz.getPay(`http://qolm.ybyt.cc/api/v1/spine/spine_level_charge?spine_level_id=${option.props.dataId}`);
    MeansJz.isKaifang.jizhuPrice = 0;
    MeansJz.isKaifang.prices = MeansJz.isKaifang.allPrice;
    MeansJz.isKaifang.jiZhuBtn = true;


  }
  render(){
    // const {jiZhuBtn} = MeansJz.isKaifang;
    const columns = this.columns;
    const price = MeansJz.price.toJS();
    const levelPer = MeansJz.jzArr.map(a => <Option key={a.id} dataId={a.id} value={a.treatment_level} style={{width: "100%"}}>{a.treatment_level}</Option>);
    //console.log(jiZhuBtn);
    return (
      <div>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="筑脊师级别/脊柱干预步骤"
          optionFilterProp="children"
          onSelect={this.handleChange}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          defaultValue= "初级"
        >
          {levelPer}
        </Select>
        <Table columns={columns} dataSource= {price} className="jzTable"/>
      </div>          
    );
  }
}

export default SpineSelect;