<template>
	<view>
		<view class="form re">
			<view class="password" style = "background-image: url('');">
				<view style = "width:190upx">旧密码：</view>
				<input style = "margin-left:0;" placeholder="请输入旧密码" v-model="passwd" :password='pwdFlag' placeholder-style="color: #9F9380;" />
				<image class="see" @click="changePwd" v-show="pwdFlag" src="/static/img/login/close.png" />
				<image class="see" @click="changePwd" v-show="!pwdFlag" src="/static/img/login/open.png">
			</view>
			<view class="password" style = "background-image: url('');">
				<view style = "width:190upx">新密码：</view>
				<input style = "margin-left:0;" placeholder="请输入新密码" v-model="repwd" :password='pwdFlag1' placeholder-style="color: #9F9380;" />
				<image class="see" @click="changePwd1" v-show="pwdFlag1" src="/static/img/login/close.png" />
				<image class="see" @click="changePwd1" v-show="!pwdFlag1" src="/static/img/login/open.png">
			</view>
			<view class="btn" @tap="doReset">提交</view>

		</view>
	</view>
</template>

<script>
	import login from "@/api/login.js"
	export default {
		data() {
			return {
				passwd:"",
				repwd:"",
				pwdFlag: true,
				pwdFlag1: true,
			}
		},
		onLoad() {

		},
		methods: {
			changePwd() {
				this.pwdFlag = !this.pwdFlag;
			},
			changePwd1() {
				this.pwdFlag1 = !this.pwdFlag1;
			},
			Timer(){},
			doReset(){
				uni.hideKeyboard()
				uni.showLoading({
					title: '提交中...'
				})
				
				const data = {
					pwd_old: this.passwd,
					pwd_new: this.repwd
				}
				
				login.chpwd(data).then(res => {
					uni.hideLoading()
					uni.showToast({title: '密码已重置',icon:"success"});
					setTimeout(()=>{
						uni.navigateBack();
					},1000)
				}, res => {
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../static/css/login.scss";

	
</style>
