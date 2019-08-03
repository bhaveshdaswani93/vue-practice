import axios from "axios";

axios.defaults.baseURL = 'https://vue-aixos.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'abc'
// axios.defaults.headers.post['SOME_GET'] = 'get_some'

// const reqInterCepter = axios.interceptors.request.use(config => {
//     console.log('Request Interceptor',config);
//     config.headers['hello'] = 'heelo';
//     return config;
// })

// const resInterCepter = axios.interceptors.response.use(res=>{
//     console.log('Response Interceptor',res);
//     return res;
// })

// console.log('Req interceptor', reqInterCepter);

// console.log('Res interceptor',resInterCepter);

// axios.interceptors.response.eject(reqInterCepter);

// export default axios;