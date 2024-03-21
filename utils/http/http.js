// 引入基路径
import {
    baseURL
} from "./config.js"

// 请求超时时间，单位毫秒
const REQUEST_TIMEOUT = 60000;

// 用于存储待处理的请求（处理重复请求和取消请求）
let pendingRequests = {};

/**
 * 获取token的方法
 * 例如，从本地存储或vuex中获取
 */
function getToken() {
    return uni.getStorageSync("token") || null;
}

function setToken(val) {
    return uni.setStorageSync("token", val);
}

function getUid() {
    return uni.getStorageSync("uid") || null;
}

function setUid(val) {
    return uni.setStorageSync("uid", val);
}


/**
 * 移除待处理的请求
 * 主要用于处理重复的请求和取消请求
 * @param {Object} config - 请求配置
 */
// 如发起了一个GET请求
// request.get("/api/data");
// 随后决定取消这个请求
// removePendingRequest({ method: "GET", url: "/api/data" });
    
function removePendingRequest(config) {
    const requestIdentifier = `${config.method}${config.url}`;
    if (pendingRequests[requestIdentifier]) {
        const { task } = pendingRequests[requestIdentifier];
        task.abort();
        delete pendingRequests[requestIdentifier];
    }
}

function checkLogin(url){
	const list = [
		'user_login',
		'user_reg',
		'send_sms',
		'pwd_forget'
	]
	
	for(var str in list) {
		if(url.search(list[str]) !== -1){
			return true
		}
	}
	
	return false
}

// 请求与响应拦截
/**
 * 全局请求拦截器
 * 可以用于修改请求配置，如添加请求头等
 * @param {Object} config - 请求配置
 * @return {Object} - 返回修改后的请求配置
 */
function requestInterceptor(config) {
	console.log(checkLogin(config.url))
	if(getToken() === null && !checkLogin(config.url)){
		uni.navigateTo({
			url: '/pages/login/login'
		});
	}
	config.data['priKey'] = getToken()
	config.data['uid'] = getUid()
    // config.header.Authorization = "Bearer " + getToken();
    return config;
}

/**
 * 全局响应拦截器
 * 可以用于处理特定的响应，如根据状态码进行重定向等
 * @param {Object} response - 响应对象
 * @return {Object} - 返回处理后的响应对象
 */
function responseInterceptor(response, request) {
    if (response.statusCode === 401) {
        // 未授权处理
    }
	
	if(request.url.search('user_login') !== -1 && response.data.data.code == 100 && response.data.data.data.priKey){
		setToken(response.data.data.data.priKey)
		setUid(response.data.data.data.uid)
	}
	
	if (response.data.data.code !== 100){
		console.log(response)
		uni.showToast({title: response.data.data.data,icon:"none"});
		response.statusCode = 500
	}
    return response;
}

// 封装的请求方法
export default {
    /**
     * 封装的网络请求方法
     * @param {Object} options - 请求选项
     * @return {Promise} - 返回一个Promise对象
     */
    request(options) {
        return new Promise((resolve, reject) => {
            const finalOptions = {
                ...options,
                url: baseURL + options.url,
                timeout: REQUEST_TIMEOUT,
                header: {
                    "Content-Type": "application/json",
                    ...options.header
                }
            };

            // 使用请求拦截器
            const interceptedOptions = requestInterceptor(finalOptions);

            // 取消重复的请求
            removePendingRequest(interceptedOptions);
            const requestTask = uni.request({
                ...interceptedOptions,
                success: (response) => {
                    // 使用响应拦截器
                    const interceptedResponse = responseInterceptor(response, interceptedOptions);
                    if (interceptedResponse.statusCode >= 200 && interceptedResponse.statusCode < 300) {
                        resolve(interceptedResponse.data);
                    } else {
                        reject(interceptedResponse);
                    }
                },
                fail: (error) => {
                    if (error.errMsg !== 'request:fail abort') {
                        reject(error);
                    }

                },
                complete: () => {
                    removePendingRequest(interceptedOptions);
                }
            });

            // 存储此次请求任务，以供后续处理
            const requestIdentifier = `${interceptedOptions.method}${interceptedOptions.url}`;
            pendingRequests[requestIdentifier] = {
                cancel: reject,
                task: requestTask
            };
        });
    },

    /**
     * 封装的GET请求方法
     * @param {string} url - 请求的URL
     * @param {Object} params - 请求参数
     * @param {Object} options - 其他选项
     * @return {Promise} - 返回一个Promise对象
     */
    get(url, params = {}, options = {}) {
        return this.request({
            method: "GET",
            url,
            data: params,
            ...options
        });
    },

    /**
     * 封装的POST请求方法
     * @param {string} url - 请求的URL
     * @param {Object} data - 请求数据
     * @param {Object} options - 其他选项
     * @return {Promise} - 返回一个Promise对象
     */
    post(url, data, options = {}) {
        return this.request({
            method: "POST",
            url,
            data,
            ...options
        });
    }
};