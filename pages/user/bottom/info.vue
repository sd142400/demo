<template>
	<view>
		<view style = "width: calc(100% - 48upx);margin: 24upx auto;">
			<view style = "width:100%;background-color: #FFFBF1; border-radius: 20upx;box-shadow: 0 4upx 8upx #F0E9D8;margin-bottom:24upx;">
				<view style = "">
					<view style = "color: #4A3A35;font-size:24upx;font-weight: 400;line-height: 44upx;float:left;margin-left:24upx;margin-top:20upx;margin-bottom:16upx;">
						{{detail.id}}
					</view>
					<view style = "color: #956E31;float:right;font-size:28upx;font-weight: 400;line-height: 44upx;margin-right:32upx;margin-top:16upx;">
						{{detail.status}}
					</view>
					<view class = "clear" style = "border-bottom: 1px solid #f0e5d3; width:94%; margin:0 auto;"></view>
				</view>
				<view>
					<view style = "float:left;margin:24upx 20upx 0upx 20upx;margin-bottom: 32upx;">
						<image style = "width:226upx;height:220upx;border-radius: 20upx;" src = "/static/img/user/ex.png"></image>
					</view>
					<view style = "float:left;margin-top:24upx;font-size: 28upx;font-weight: 400;line-height: 44upx;color:rgba(74, 58, 53, 1);">
						<view>质押：{{detail.item_money}}</view>
						<view>总收益：{{detail.award_max}}</view>
						<view>质押{{detail.keep_days}}天</view>
						<view>日化率：{{detail.award_day_percent * 100}}%</view>
						<view style = "color:#BB9359;">{{detail.award_interval_day}}</view>
					</view>
					<view class = "clear" style = "border-bottom: 1px dashed #f0e5d3; width:94%; margin:0 auto;"></view>
				</view>
				<view style = "font-size: 28upx; font-weight: 400;line-height: 44upx;color:#4A3A35;margin-left:24upx;margin-top:30upx;margin-bottom:24upx;">
					{{detail.item_name}}
				</view>
				<view>
					<view style = "color: #9F9380;font-size:24upx;font-weight: 400;line-height: 44upx;float:left;margin-left:24upx;">
						支付方式
					</view>
					<view style = "color: #4A3A35;float:right;font-size:28upx;font-weight: 400;line-height: 44upx;margin-right:32upx;">
						{{detail.pay_type}}
					</view>
					<view class = "clear"></view>
				</view>
				<view>
					<view style = "color: #9F9380;font-size:24upx;font-weight: 400;line-height: 44upx;float:left;margin-left:24upx;">
						创建时间
					</view>
					<view style = "color: #4A3A35;float:right;font-size:28upx;font-weight: 400;line-height: 44upx;margin-right:32upx;">
						{{detail.createTime}}
					</view>
					<view class = "clear"></view>
				</view>
				<view style = "margin-bottom: 32upx;">
					<view style = "color: #9F9380;font-size:24upx;font-weight: 400;line-height: 44upx;float:left;margin-left:24upx;">
						支付时间
					</view>
					<view style = "color: #4A3A35;float:right;font-size:28upx;font-weight: 400;line-height: 44upx;margin-right:32upx;">
						{{detail.createTime}}
					</view>
					<view class = "clear"></view>
				</view>
				<view class = "clear"></view>
			</view>
		</view>
		<view style = "background-color: #FFFBF1;margin-top:24upx;padding:24upx;width: calc(100% - 96upx);margin: 24upx auto;border-radius: 20upx;">
			<view style = "text-align: center;color:#4A3A35;font-size: 32upx;font-weight: 400;line-height: 48upx;">
				- 我的收益 -
			</view>
			<view v-for = "(item, i) in list">
				<view style = "float:left;">
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
	</view>
</template>

<script>
	import user from "@/api/user.js"
	export default {
		data() {
			return {
				id: "",
				receive:"",
				num:"",
				show:"",
				detail:{},
				list:[]
			}
		},
		onLoad(op) {
			this.id = op.id
		},
		created() {
			this.fetch()
		},
		methods: {
			fetch(){
				user.detail({order_id: this.id}).then(res => {
					this.detail = res.data.data.order
					this.list = res.data.data.data
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
