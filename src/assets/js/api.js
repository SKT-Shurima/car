import axios from 'axios';
// 测试
let base = '/apis';
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
// 维修保养查询
export const upkeepSearch = (params)=>{
	params = trans(params);
	return axios.post(`${base}search/upkeepSearch`,params).then(res=>res.data);
}
// 出险车辆查询
export const dangerOneSearch = (params)=>{
	params = trans(params);
	return axios.post(`${base}search/dangerOneSearch`,params).then(res=>res.data);
}
// 出险次数查询
export const countSearch = (params)=>{
	params = trans(params);
	return axios.post(`${base}search/countSearch`,params).then(res=>res.data);
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