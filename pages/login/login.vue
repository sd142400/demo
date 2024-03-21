<template>
	<view>
        <view class="logo">
			<view class="img">
				<image mode = "widthFix" src = "/static/img/login/logo.png" />
			</view>
		</view>
		<!-- 账号密码输入框 -->
		<view class="form">
			<view class="username">
				<input placeholder="请输入账号" v-model="phoneNumber" placeholder-style="color: #9F9380;"/>
			</view>
			<view class="password">
				<input placeholder="请输入密码" v-model="passwd" :password='pwdFlag' placeholder-style="color: #9F9380;"/>
				<image class = "see" @click = "changePwd" v-show="pwdFlag"  src = "/static/img/login/close.png" />
				<image class = "see" @click = "changePwd" v-show="!pwdFlag" src = "/static/img/login/open.png">
			</view>
			<view class="res">
				<view @tap="toPage('register')">用户注册</view>
				<view @tap="toPage('resetpasswd')">忘记密码</view>
			</view>
			<view class="btn" @tap="doLogin">登 录</view>
			
		</view>
	</view>
</template>

<script>
	import login from "@/api/login.js"
	export default {
		data() {
			return {
				phoneNumber: '',
				passwd:'',
				pwdFlag:true,
			}
		},
		onShow() {
			
		},
		methods: {
			changePwd(){
				this.pwdFlag = !this.pwdFlag;
			},
			toPage(page){
				uni.hideKeyboard()
				uni.navigateTo({
					url: page
				});
			},
			doLogin(){
				uni.hideKeyboard();
				//验证手机号码
				// if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
				// 	uni.showToast({title: '请填写正确手机号码',icon:"none"});
				// 	return false; 
				// }
				uni.showLoading({
					title: '提交中...'
				})
				login.login({
					acc: this.phoneNumber,
					pwd: this.passwd
				}).then(res => {
					uni.hideLoading()
					uni.showToast({title: '登录成功',icon:"success"});
					uni.switchTab({
						url: '../tabBar/home/home',
					})
				},res => {
					uni.hideLoading()
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../static/css/login.scss";
	
	.form {
		.res {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 16upx;
			color: #956E31;
		}
	}
	.oauth{
		@media all and (max-height:150vw){
			display: none;
		}
		position: absolute;
		bottom: 50upx;
		width: 100%;
		.text{
			width: 100%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgba($color: #ffffff, $alpha: 0.8);
			font-size: 28upx;
		}
		.list{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20upx 0;
			.icon{
				font-size:80upx;
				margin: 0 30upx;
			}
		}
	}
</style>
