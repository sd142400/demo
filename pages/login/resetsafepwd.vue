<template>
	<view>
		<view class="form re">
			<view class="code" style = "background-image: url('');">
				<view style = "width:228upx">验证码：</view>
				<input style = "margin-left:0;" placeholder="请输入验证码" v-model="code" placeholder-style="color: #9F9380;"/>
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
			</view>
			<view class="password" style = "background-image: url('');">
				<view style = "width:258upx">安全密码：</view>
				<input style = "margin-left:0;" placeholder="请输入安全密码" v-model="passwd" :password='pwdFlag' placeholder-style="color: #9F9380;" />
				<image class="see" @click="changePwd" v-show="pwdFlag" src="/static/img/login/close.png" />
				<image class="see" @click="changePwd" v-show="!pwdFlag" src="/static/img/login/open.png">
			</view>
			<view class="btn" @tap="doReset">提交</view>

		</view>
	</view>
</template>

<script>
	import login from "@/api/login.js"
	import user from "@/api/user.js"
	export default {
		data() {
			return {
				phoneNumber:"",
				code:'',
				passwd:"",
				getCodeText:'获取验证码',
				getCodeBtnColor:"#9F9380",
				getCodeisWaiting:false,
				pwdFlag: true,
				sms:0,
			}
		},
		onLoad() {

		},
		created() {
			this.fetchInfo()
		},
		methods: {
			fetchInfo() {
				user.info().then(res => {
					this.phoneNumber = res.data.data.phone
				})
			},
			changePwd() {
				this.pwdFlag = !this.pwdFlag;
			},
			getCode(){
				if(this.getCodeisWaiting){
					return ;
				}
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				} 
				this.getCodeText = "发送中..."
				this.getCodeisWaiting = true;
				this.getCodeBtnColor = "#9F9380"
				
				login.send({phone: this.phoneNumber}).then(res => {
					uni.showToast({
						title: res.data.data.msg,
						icon: "none"
					});
					//示例默认1234，生产中请删除这一句。
					this.sms = res.data.data.smsId;
					this.setTimer();
				})
				//示例用定时器模拟请求效果
				// setTimeout(()=>{
				// 	uni.showToast({title: '验证码已发送',icon:"none"});
				// 	//示例默认1234，生产中请删除这一句。
				// 	this.code=1234;
				// 	this.setTimer();
				// },1000)
				
				
			},
			setTimer(){
				let holdTime = 60;
				this.getCodeText = "重新获取(60)"
				this.Timer = setInterval(()=>{
					if(holdTime<=0){
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#9F9380";
						this.getCodeText = "获取验证码"
						clearInterval(this.Timer);
						return ;
					}
					this.getCodeText = "重新获取("+holdTime+")"
					holdTime--;
					
				},1000)
			},
			doReset(){
				uni.hideKeyboard()
				//模板示例部分验证规则
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				} 

				uni.showLoading({
					title: '提交中...'
				})
				
				const data = {
					sms_id:this.sms,
					sms_code: this.code,
					pwd: this.passwd
				}
				
				login.safe(data).then(res => {
					uni.hideLoading()
					uni.showToast({title: '安全密码已修改',icon:"success"});
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
