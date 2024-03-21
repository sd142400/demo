//在config/index.js
// 请求的基本路径
const baseURL = process.env.NODE_ENV === "development" ?
// "http://localhost:8080/web"://测试环境(请求接口的代理路径)
"http://103.147.225.170:4001"://测试环境(请求接口的代理路径)
"http://api.plmsapp.com";//上线环境
 
export {baseURL}