<template>
	<view>
		<view  v-for="(item, i) in list" style = "background-color: #FFFBF1;padding:24upx; margin-top: 24upx;">
			<view>
				<view style = "">
					<view style = "color: #4A3A35;font-size:32upx;font-weight: 400;line-height: 48upx;float:left;margin-left:24upx;margin-top:20upx;margin-bottom:16upx;">
						{{item.acc}}
					</view>
					<view style = "color: #956E31;float:right;font-size:32upx;font-weight: 400;line-height: 48upx;margin-right:32upx;margin-top:16upx;">
						{{item.level}}
					</view>
					<view class = "clear" style = "border-bottom: 1px solid #f0e5d3; width:94%; margin:0 auto;"></view>
				</view>
				<view style = "margin-top:32upx;">
					<view style = "color: #756860;font-size:28upx;font-weight: 400;line-height: 44upx;float:left;margin-left:24upx;">
						团队人数
					</view>
					<view style = "color: #756860;float:right;font-size:28upx;font-weight: 400;line-height: 44upx;margin-right:32upx;">
						{{item.team_size}}
					</view>
					<view class = "clear"></view>
				</view>
				<view >
					<view style = "color: #756860;font-size:28upx;font-weight: 400;line-height: 44upx;float:left;margin-left:24upx;">
						团队业绩
					</view>
					<view style = "color: #756860;float:right;font-size:28upx;font-weight: 400;line-height: 44upx;margin-right:32upx;">
						{{item.team_invest}}
					</view>
					<view class = "clear"></view>
				</view>
				<view>
					<view style = "color: #756860;font-size:28upx;font-weight: 400;line-height: 44upx;float:left;margin-left:24upx;">
						注册时间
					</view>
					<view style = "color: #756860;float:right;font-size:28upx;font-weight: 400;line-height: 44upx;margin-right:32upx;">
						{{item.reg_date}}
					</view>
					<view class = "clear"></view>
				</view>
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
				page:0,
				list: [],
				max:0,
				loadingText:""
			}
		},
		onReachBottom() {
			let len = this.list.length;
			console.log(len)
			if (len >= this.max) {
				this.loadingText = '- 到底了 -';
				return false;
			}
			uni.showToast({
				title: '加载中'
			});
			this.page++
			this.fetch()
		},
		onLoad() {

		},
		created(){
			this.fetch()
		},
		methods: {
			fetch() {
				user.team({page: this.page}).then(res => {
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
