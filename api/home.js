import request from "@/utils/http/http.js"

export default {
	classify(data) {
		return request.get('/get_item_classify', data)
	},
	item(data) {
		return request.get('/get_item_by_classify', data)
	},
	itemid(data) {
		return request.get('/get_item_by_id', data)
	},
	buy(data) {
		return request.get('/buy_item', data)
	},
}
