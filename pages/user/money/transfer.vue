<template>
	<view>
		<view class="form re" style="margin-top:80upx;">
			<view class="username" style="background-image: url('');">
				<view style="width:440upx">USDT：</view>
				<input disabled="true" placeholder="0" placeholder-style="color: #9F9380;" />
			</view>
			<view class="username" style="background-image: url('');">
				<view style="width:300upx"><span style="color:red;">*</span>接收方：</view>
				<input placeholder="请输入接收方数量" v-model="receive" placeholder-style="color: #9F9380;" />
			</view>
			<view class="username" style="background-image: url('');">
				<view style="width:300upx"><span style="color:red;">*</span>数量：</view>
				<input placeholder="请输入充值数量" v-model="num" placeholder-style="color: #9F9380;" />
			</view>
			<view class="username" style="background-image: url('');">
				<view style="width:300upx"><span style="color:red;">*</span>安全密码：</view>
				<input type="password" placeholder="请输入安全密码" v-model="pwd" placeholder-style="color: #9F9380;" />
			</view>
			<view class="btn" @tap="fetch">立即转账</view>

		</view>
		<view v-show="show"
			style="position: fixed;top:0;width: 100%;height:100%;background: rgba(100, 100, 100, 0.5);z-index:99;">
			<view
				style="width:70%;height:436upx;border-radius: 24upx;margin:50% auto 0 auto;background-color: #FFFBF1;box-shadow:0upx 6upx 30upx #8E703B;">
				<view style="text-align: center;padding-top:64upx;padding-bottom:32upx;">
					<image style="width:96upx;height:96upx;" src="/static/img/user/ok.png"></image>
				</view>
				<view
					style="text-align: center;font-size: 40upx;font-weight: 400;line-height: 60upx;color:rgba(74, 58, 53, 1)">
					提现成功
				</view>
				<view
					style="height:68upx;padding-top:20upx;text-align:center; width:80%;margin:64upx auto;border-radius:16upx;border: 1px solid #956E31; font-size: 32upx;font-weight: 400;line-height: 48upx;color:rgba(149, 110, 49, 1)">
					返回
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import user from "@/api/user.js"
	export default {
		data() {
			return {
				receive: "",
				num: "",
				pwd: '',
				show: "",
			}
		},
		onLoad() {

		},
		methods: {
			fetch() {
				const data = {
					toAcc: this.receive,
					amount: this.num,
					pay_pwd: this.pwd
				}
				uni.showLoading({
					title: '转账中...'
				})
				user.transfer(data).then(res => {
					uni.hideLoading()
					// uni.showToast({title: '提现成功',icon:"success"});
					// uni.navigateBack();
					this.show = true;
				}, res => {
					uni.hideLoading()
				})
			},
		}
	}
</script>

<style lang="scss">
	@import "../../../static/css/login.scss";
</style>