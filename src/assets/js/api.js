import axios from 'axios';
// 测试
// let base = '/apis';
// 线上测试
let base = 'http://carbid.zertone2.com/app';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';



const trans = params => {
    // Do whatever you want to transform the data
    let ret = ''
    for (let it in params) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(params[it]) + '&'
    }
    return ret ;
}

// 登录
export const login = (params) =>{
	params = trans(params);
	return axios.post(`${base}/user/login`,params).then(res=>res.data);
}
// 获取支付金额
export const prepay =(params)=>{
	params = trans(params);
	return axios.post(`${base}/pay/prepay`,params).then(res=>res.data);
}
// 支付
export const pay = (params)=>{
	params = trans(params);
	return axios.post(`${base}/pay/pay`,params).then(res=>res.data);
}
// 维修保养查询
export const upkeepSearch = (params)=>{
	params = trans(params);
	return axios.post(`${base}/search/upkeepSearch`,params).then(res=>res.data);
}
// 出险车辆查询
export const dangerOneSearch = (params)=>{
	params = trans(params);
	return axios.post(`${base}/search/dangerOneSearch`,params).then(res=>res.data);
}
// 出险次数查询
export const countSearch = (params)=>{
	params = trans(params);
	return axios.post(`${base}/search/countSearch`,params).then(res=>res.data);
}
// 历史记录
export const historyInfo = (params)=>{
	params =trans(params);
	return axios.post(`${base}/search/historyInfo`,params).then(res=>res.data);
}
// 删除历史记录
export const historyDelete =(params)=>{
	params= trans(params);
	return axios.post(`${base}/search/historyDelete`,params).then(res=>res.data);
}
// 获取用户信息
export const getuserinfo = (params)=>{
	params = trans(params);
	return axios.post(`${base}/user/getuserinfo`,params).then(res=>res.data);
}
// 获取卖车信息
export const getInfo = (params)=>{
	params = trans(params);
	return axios.post(`${base}/sell/getInfo`,params).then(res=>res.data);
}
// 提出卖车申请
export const apply = (params)=>{
	params = trans(params);
	return axios.post(`${base}/sell/apply`,params).then(res=>res.data);
} 