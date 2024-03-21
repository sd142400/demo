<template>
	<view>
		<view class="form re" style= "margin-top:80upx;">
			<view class="username" style = "background-image: url('');">
				<view style = "width:480upx">USDT（{{data[wallet]}}）：</view>
				<input disabled="true" placeholder="0" placeholder-style="color: #9F9380;"/>
			</view>
			<view class="username" style = "background-image: url('');">
				<view style = "width:250upx"><span style = "color:red;">*</span>选择钱包：</view>
				<uni-data-checkbox v-model="wallet" :localdata="option"></uni-data-checkbox>
			</view>
			<view class="username" style = "background-image: url('');">
				<view style = "width:350upx"><span style = "color:red;">*</span>数量：</view>
				<input placeholder="请输入充值数量" v-model="num" placeholder-style="color: #9F9380;"/>
			</view>
			<view class="btn" @tap="doReset">立即充值</view>
		</view>
		<view v-show = "show" style = "position: fixed;top:0;width: 100%;height:100%;background: rgba(100, 100, 100, 0.5);z-index:99;">
			<view  style = "width:70%;height:436upx;border-radius: 24upx;margin:50% auto 0 auto;background-color: #FFFBF1;box-shadow:0upx 6upx 30upx #8E703B;">
				<view style = "text-align: center;padding-top:64upx;padding-bottom:32upx;">
					<image style = "width:96upx;height:96upx;" src = "/static/img/user/ok.png"></image>
				</view>
				<view style = "text-align: center;font-size: 40upx;font-weight: 400;line-height: 60upx;color:rgba(74, 58, 53, 1)">
					提现成功
				</view>
				<view style = "height:68upx;padding-top:20upx;text-align:center; width:80%;margin:64upx auto;border-radius:16upx;border: 1px solid #956E31; font-size: 32upx;font-weight: 400;line-height: 48upx;color:rgba(149, 110, 49, 1)">
					返回
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wallet:0,
				num:"",
				option:[{
					text: '币安',
					value: 0
				}, {
					text: '波场',
					value: 1
				}],
				data:{
					0: '币安',
					1: '波场',
				},
				show:false,
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import "../../../static/css/login.scss";

	
</style>
