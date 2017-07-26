import React from 'react';
import { Route, IndexRoute } from 'react-router';

//import router;
import App from './containers/App/App';
import HomePage from './containers/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Login from "./containers/Login/Login";
import RolesConfig from "./containers/RolesManage/RolesConfig/RolesConfig"; //角色配置
import ManageList from "./containers/RolesManage/DoctorsList/ManageList"; //健康管理师列表

import HealthRecord from "./containers/HealthRecord/HealthRecord"; //健康管理记录号

import NewRecord from "./containers/RecordManage/NewRecords/NewRecord"; //新建档案
import PatientList from "./containers/RecordManage/PatientList/PatientList"; //客户列表
import Evaluate from "./containers/RecordManage/PatientList/Evaluate"; //评价客户

import FollowUpSurvey from "./containers/Physical/FollowUpSurvey"; //随访包测量
import BloodPressure from "./containers/Physical/BloodPressure"; //血压数据录入
import BloodSugar from "./containers/Physical/BloodSugar"; //血糖数据录入
import Temperature from "./containers/Physical/Temperature"; //体温数据录入
import Weight from "./containers/Physical/Weight"; //体重数据录入
import HeartRate from "./containers/Physical/HeartRate"; //心率数据录入
import BloodFat from "./containers/Physical/BloodFat"; //血脂数据录入
import Unine from "./containers/Physical/Unine"; //尿酸数据录入

import Spine from "./containers/Means/Spine"; //筑脊模块
import DiseaseLocation from "./containers/Means/DiseaseLocation"; //疾病谱定位
import HealthManagement from "./containers/Means/HealthManagement"; //健康管理模块
import HealthSearch from "./containers/Means/HealthSearch"; //健康管理模块的记录查询
import LookMeans from "./containers/Means/lookMeans"; //记录查询详情页

import ExceptionData from "./containers/Dynamic/ExceptionData"; //异常管理
// import FollowUpRecord from "./containers/Dynamic/FollowUpRecord"; //随访记录

import HolographicView from "./containers/HolographicView/HolographicView"; //全息视图
import HealthMonitor from "./containers/RecordManage/PatientList/HealthMonitor"; //客户列表页面的查看体检健康报告的健康监测
import FileView from "./containers/RecordManage/PatientList/FileView";//客户列表页面的

export default (
		<Route path="/" component={App}>
			<IndexRoute component={HomePage}/>

			<Route path="/roles" component={RolesConfig}/> 
			<Route path="/doctorsList" component={ManageList}/>

			<Route path="/registeredPost" component={HealthRecord}/> 

			<Route path="/newRecord" component={NewRecord}/> 
			<Route path="/patientList" component={PatientList}/>
			<Route path="/fileview" component={FileView}/>
			<Route path="/recordManage/evaluate" component={Evaluate}/>
			<Route path="/recordManage/healthmonitor" component={HealthMonitor}/>

			<Route path="/followUpSurvey" component={FollowUpSurvey}/>
			<Route path="/bloodPressure" component={BloodPressure}/>
			<Route path="/bloodSugar" component={BloodSugar}/>
			<Route path="/temperature" component={Temperature}/>
			<Route path="/weight" component={Weight}/>
			<Route path="/heartRate" component={HeartRate}/>
			<Route path="/blood_fat" component={BloodFat}/>
			<Route path="/unine" component={Unine}/>

			<Route path="/spine" component={Spine}/>
			<Route path="/diseaseLocation" component={DiseaseLocation}/>
			<Route path="/healthManagement" component={HealthManagement}/>
			<Route path="/means/healthSearch" component={HealthSearch}/>
			<Route path="/means/lookMeans" component={LookMeans}/>

			<Route path="/exceptionData" component={ExceptionData}/>
			{/*<Route path="/dynamic/followUpRecord" component={FollowUpRecord}/> */}

			<Route path="/holographicView" component={HolographicView}/>

			<Route path="*" component={NotFoundPage}/>
		</Route>
);
