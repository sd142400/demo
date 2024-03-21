<template>
	<view>
		<view style = "background-color: #FFFBF1;margin-top:24upx;padding:24upx;width: calc(100% - 96upx);margin: 24upx auto;border-radius: 20upx;">
			<view v-for = "(item, i) in list">
				<view  style = "float:left;">
					<view style = "color:#4A3A35;font-size: 28upx;line-height: 30upx;margin-bottom: 16upx;margin-top:26upx;">
						{{item.logType}}
					</view>
					<view style="color:#9F9380;font-size: 24upx;line-height: 24upx;margin-bottom: 24upx;">
						{{item.createDate}}
					</view>
				</view>
				<view style="float: right;margin-top:46upx;margin-right: 32upx;color:#4A3A35;font-size: 30upx;line-height: 30upx;">
					{{item.amount}}
				</view>
				<view class="clear" style = "border-bottom: 1px solid #f0e5d3; width:94%; margin:0 auto;"></view>
			</view>
		</view>
		<view style = "text-align: center;font-size: 24upx;color:#999;padding-top:10upx;">{{this.loadingText}}</view>
	</view>
</template>

<script>
	import user from "@/api/user.js"
	export default {
		data() {
			return {
				receive:"",
				num:"",
				show:"",
				req:{
					page:0,
					page_limit:20,
				},
				list:[],
				max:0,
				loadingText:""
			}
		},
		onReachBottom() {
			uni.showToast({
				title: '加载中'
			});
			let len = this.list.length;
			console.log(len)
			if (len >= this.max) {
				this.loadingText = '- 到底了 -';
				return false;
			}
			this.fetchLog()
		},
		onLoad() {
			
		},
		created(){
			this.fetchLog()
		},
		methods: {
			fetchLog() {
				user.moneyLog(this.req).then(res => {
					this.list = this.list.concat(res.data.data.data)
					this.max = res.data.data.count
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color:#F9F3E7;
}
.clear{
	clear: both;
}
	
</style>
