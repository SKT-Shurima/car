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

// 
export const login = (params) =>{
	params = trans(params);
	return axios.post(`${base}/user/login`,params).then(res=>res.data);
}

