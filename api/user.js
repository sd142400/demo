import request from "@/utils/http/http.js"

export default {
	info() {
		return request.get('/user_info', {})
	},
	moneyLog(data) {
		return request.get('/get_wallet_log', data)
	},
	invite() {
		return request.get('/invite_info', {})
	},
	withdraw(data) {
		return request.get('/api_withdraw', data)
	},
	transfer(data) {
		return request.get('/transfer', data)
	},
	team(data) {
		return request.get('/my_team', data)
	},
	pldege(data) {
		return request.get('/get_order', data)
	},
	detail(data) {
		return request.get('/get_order_details', data)
	},
	address(data){
		return request.get('/get_wallet_address', data)
	}
	
}
