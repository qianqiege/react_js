import React from 'react';
import { Route, IndexRoute } from 'react-router';

//import router;
import App from './containers/App/App';
import HomePage from './containers/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import RolesConfig from "./containers/RolesManage/RolesConfig/RolesConfig"; //角色配置
import ManageList from "./containers/RolesManage/DoctorsList/ManageList"; //健康管理师列表

import HealthRecord from "./containers/HealthRecord/HealthRecord"; //健康管理记录号

import NewRecord from "./containers/RecordManage/NewRecords/NewRecord"; //新建档案
import PatientList from "./containers/RecordManage/PatientList/PatientList"; //客户列表

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

import ExceptionData from "./containers/Dynamic/ExceptionData"; //异常管理
// import FollowUpRecord from "./containers/Dynamic/FollowUpRecord"; //随访记录

import HolographicView from "./containers/HolographicView/HolographicView"; //全息视图
import HealthMonitor from "./containers/RecordManage/PatientList/HealthMonitor"; //客户列表页面的查看体检健康报告的健康监测

export default (
		<Route path="/" component={App}>
			<IndexRoute component={HomePage}/>

			<Route path="/rolesmanage/roles" component={RolesConfig}/> 
			<Route path="/rolesmanage/doctorsList" component={ManageList}/>

			<Route path="/healthrecord" component={HealthRecord}/> 

			<Route path="/recordManage/newRecord" component={NewRecord}/> 
			<Route path="/recordManage/patientList" component={PatientList}/>
			<Route path="/recordManage/healthmonitor" component={HealthMonitor}/>

			<Route path="/physical/followUpSurvey" component={FollowUpSurvey}/>
			<Route path="/physical/bloodPressure" component={BloodPressure}/>
			<Route path="/physical/bloodSugar" component={BloodSugar}/>
			<Route path="/physical/temperature" component={Temperature}/>
			<Route path="/physical/weight" component={Weight}/>
			<Route path="/physical/heartRate" component={HeartRate}/>
			<Route path="/physical/blood_fat" component={BloodFat}/>
			<Route path="/physical/unine" component={Unine}/>

			<Route path="/means/spine" component={Spine}/>
			<Route path="/means/diseaseLocation" component={DiseaseLocation}/>
			<Route path="/means/healthManagement" component={HealthManagement}/>

			<Route path="/dynamic/exceptionData" component={ExceptionData}/>
			{/*<Route path="/dynamic/followUpRecord" component={FollowUpRecord}/> */}

			<Route path="/holographicView" component={HolographicView}/>

			<Route path="*" component={NotFoundPage}/>
		</Route>
);
