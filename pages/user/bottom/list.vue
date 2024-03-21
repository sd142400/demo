<template>
	<view>
		<view v-for="(item, i) in list" style = "width: calc(100% - 48upx);margin: 24upx auto;" @tap="toInfo(item)">
			<view  style = "width:100%;background-color: #FFFBF1; border-radius: 20upx;box-shadow: 0 4upx 8upx #F0E9D8;margin-bottom:24upx;">
				<view style = "">
					<view style = "color: #4A3A35;font-size:24upx;font-weight: 400;line-height: 44upx;float:left;margin-left:24upx;margin-top:20upx;margin-bottom:16upx;">
						{{item.id}}
					</view>
					<view style = "color: #956E31;float:right;font-size:28upx;font-weight: 400;line-height: 44upx;margin-right:32upx;margin-top:16upx;">
						{{item.status}}
					</view>
					<view class = "clear" style = "border-bottom: 1px solid #f0e5d3; width:94%; margin:0 auto;"></view>
				</view>
				<view>
					<view style = "float:left;margin:24upx 20upx 30upx 20upx;">
						<image style = "width:226upx;height:220upx;border-radius: 20upx;" :src = "item.item_img"></image>
					</view>
					<view style = "float:left;margin-top:24upx;font-size: 28upx;font-weight: 400;line-height: 44upx;color:rgba(74, 58, 53, 1);">
						<view>质押：{{item.item_money}}</view>
						<view>总收益：{{item.award_max}}</view>
						<view>质押{{item.keep_days}}天</view>
						<view>日化率：{{item.award_day_percent * 100}}%</view>
						<view style = "color:#BB9359;">{{item.award_interval_day}}</view>
					</view>
					<view class = "clear"></view>
				</view>
				<view v-show = "item.status == '待支付'">
					<view style="float:left;margin-left:24upx;margin-bottom: 30upx;font-size: 24upx;font-weight: 400;line-height: 36upx;color:rgba(118, 105, 96, 1);">
						下单时间：{{item.createTime}}
					</view>
					<view @tap="toPay" style = "float:right;width:144upx;height:38upx;background-color: #956E31;border-radius: 8upx;color:#FFf;font-size: 24upx;font-weight: 400;line-height: 24upx;text-align: center;padding-top:10upx;margin-right:28upx;">
						立即支付
					</view>
					<view class = "clear"></view>
				</view>
				<view class = "clear"></view>
			</view>
		</view>
		<!-- <view style = "width: calc(100% - 48upx);margin: 24upx auto;" @tap="toInfo">
			<view style = "width:100%;background-color: #FFFBF1; border-radius: 20upx;box-shadow: 0 4upx 8upx #F0E9D8;margin-bottom:24upx;">
				<view style = "">
					<view style = "color: #4A3A35;font-size:24upx;font-weight: 400;line-height: 44upx;float:left;margin-left:24upx;margin-top:20upx;margin-bottom:16upx;">464070045802693</view>
					<view style = "color: #956E31;float:right;font-size:28upx;font-weight: 400;line-height: 44upx;margin-right:32upx;margin-top:16upx;">进行中</view>
					<view class = "clear" style = "border-bottom: 1px solid #f0e5d3; width:94%; margin:0 auto;"></view>
				</view>
				<view>
					<view style = "float:left;margin:24upx 20upx 30upx 20upx;">
						<image style = "width:226upx;height:220upx;border-radius: 20upx;" src = "/static/img/user/ex.png"></image>
					</view>
					<view style = "float:left;margin-top:24upx;font-size: 28upx;font-weight: 400;line-height: 44upx;color:rgba(74, 58, 53, 1);">
						<view>质押：30000</view>
						<view>月收益：42228</view>
						<view>质押82天</view>
						<view>日化率：1.53%</view>
						<view style = "color:#BB9359;">每天发放</view>
					</view>
					<view class = "clear"></view>
				</view>
				<view class = "clear"></view>
			</view>
		</view> -->
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
				query:{
					page:0,
					page_limit:20
				},
				list:[],
				max:0
			}
		},
		onLoad() {

		},
		created() {
			this.fetch()
		},
		onReachBottom() {
			console.log("dawo")
			let len = this.list.length;
			console.log(len)
			if (len >= this.max) {
				this.loadingText = '到底了';
				return false;
			}
			uni.showToast({
				title: '加载中',
			})
			this.query.page++
			this.fetch()
		},
		methods: {
			fetch() {
				user.pldege(this.query).then(res => {
					this.list = this.list.concat(res.data.data.data)
					this.max = res.data.data.count
				})
			},
			toInfo(item){
				if (item.status == '待支付'){
					return false
				}
				uni.navigateTo({
					url:'/pages/user/bottom/info?id=' + item.id
				})
			},
			toPay(){
				uni.navigateTo({
					url:'../../goods/goods'
				})
			},
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
