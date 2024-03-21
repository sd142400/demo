import request from "@/utils/http/http.js"

export default {
	reg(data) {
		return request.get('/user_reg', data)
	},
	login(data) {
		// let data = {
		// 	acc: 'dawo_4321',
		// 	pwd: 'dawo_1234'
		// }
		return request.get('/user_login', data)
	},
	send(data){
		return request.get('/send_sms', data)
	},
	chpwd(data){
		return request.get('/pwd_change', data)
	},
	safe(data){
		return request.get('/pay_pwd_update', data)
	},
	forget(data){
		return request.get('/pwd_forget', data)
	},
}
