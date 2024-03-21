<template>
	<view>
        <view class="logo">
			<view class="img">
				<image mode = "widthFix" src = "/static/img/login/logo.png" />
			</view>
		</view>
		<view class="form re">
			<view class="country" style = "color:#9F9380;" @click = "changeCountry">
				{{countryName}}
				<view style=  "position: absolute;right:80upx;">
					{{countryCode}}
					<uni-icons style = "color:#9F9380"  type="forward"></uni-icons>
				</view>
			</view>
			<view class="username">
				<input placeholder="请输入手机号" v-model="phoneNumber" placeholder-style="color: #9F9380"/>
			</view>
			<view class="username">
				<input placeholder="请输入账户" v-model="acc" placeholder-style="color: #9F9380"/>
			</view>
			<view class="code">
				<input placeholder="请输入验证码" v-model="code" placeholder-style="color: #9F9380;"/>
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
			</view>
			<view class="password">
				<input placeholder="请输入密码" v-model="passwd" :password='pwdFlag' placeholder-style="color: #9F9380;" />
				<image class="see" @click="changePwd" v-show="pwdFlag" src="/static/img/login/close.png" />
				<image class="see" @click="changePwd" v-show="!pwdFlag" src="/static/img/login/open.png">
			</view>
			<view class="btn" @tap="doReset">重置密码</view>

		</view>
		<uni-indexed-list v-show = "country" style = "z-index:99;" :options="list" :showSelect="true" @click="bindClick"></uni-indexed-list>
	</view>
</template>

<script>
	import login from "../../api/login";
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
				list: this.$t('login.country'),
				country: false,
				countryName: "中国大陆",
				countryCode: "+86",
				sms:0,
				acc:''
			}
		},
		onLoad() {

		},
		methods: {
			bindClick(e) {
				console.log('点击item，返回数据' + JSON.stringify(e))
				this.changeCountry();
				this.countryName = e.item.city;
				this.countryCode = e.item.code;
			},
			changePwd() {
				this.pwdFlag = !this.pwdFlag;
			},
			changeCountry() {
				for(var m = 0; m < this.list.length; m++){
					for(var n = 0; n < this.list[m].data.length; n++){
						this.list[m].data[n].checked = false
					}
				}
				this.country = !this.country;
			},
			Timer(){},
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

				//示例验证码，实际使用中应为请求服务器比对验证码是否正确。
				if(this.code!=1234){ 
					uni.showToast({title: '验证码不正确',icon:"none"});
					return false; 
				}
				uni.showLoading({
					title: '提交中...'
				})
				
				const data = {
					acc: this.acc,
					phone:this.phoneNumber,
					sms_id:this.sms,
					sms_code: this.code,
					pwd: this.passwd,
					areaCode: this.countryCode
				}
				
				login.forget(data).then(res => {
					uni.hideLoading()
					uni.showToast({title: '密码已重置',icon:"success"});
					setTimeout(()=>{
						uni.navigateTo({
							url: '/pages/login/login'
						});
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
