<template>
	<view>
		<view class="form re" style= "margin-top:80upx;">
			<view class="username" style = "background-image: url('');">
				<view style = "width:550upx">USDT（{{data[wallet]}}）：</view>
				<input disabled="true" placeholder="0" placeholder-style="color: #9F9380;"/>
			</view>
			<view class="username" style = "background-image: url('');padding:0;width:100%;">
				<view style = "width:200upx; padding-left:10upx"><span style = "color:red;">*</span>选择钱包：</view>
				<uni-data-checkbox v-model="wallet" :localdata="option"></uni-data-checkbox>
			</view>
			<view class="code">
				<view style = "width:230upx"><span style = "color:red;">*</span>验证码：</view>
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
				<input placeholder="请输入验证码" v-model="code" placeholder-style="color: #9F9380;" />
			</view>
			<view class="username" style = "background-image: url('');">
				<view style = "width:230upx"><span style = "color:red;">*</span>数量：</view>
				<input style = "margin-left:0;" placeholder="请输入充值数量" v-model="num" placeholder-style="color: #9F9380;"/>
			</view>
			<view v-show = "wallet == 2" class="username" style = "background-image: url('');">
				<view style = "width:230upx"><span style = "color:red;">*</span>开户姓名：</view>
				<input style = "margin-left:0;" placeholder="请输入开户姓名" v-model="name" placeholder-style="color: #9F9380;"/>
			</view>
			<view v-show = "wallet == 2" class="username" style = "background-image: url('');">
				<view style = "width:230upx"><span style = "color:red;">*</span>开户行：</view>
				<input style = "margin-left:0;" placeholder="请输入开户行" v-model="bank" placeholder-style="color: #9F9380;"/>
			</view>
			<view v-show = "wallet == 2" class="username" style = "background-image: url('');">
				<view style = "width:230upx"><span style = "color:red;">*</span>银行卡号：</view>
				<input style = "margin-left:0;" placeholder="银行卡号" v-model="card" placeholder-style="color: #9F9380;"/>
			</view>
			<view v-show = "wallet == 0 || wallet == 1" class="username" style = "background-image: url('');">
				<view style = "width:230upx"><span style = "color:red;">*</span>接受方：</view>
				<input style = "margin-left:0;" placeholder="请输入接受方地址" v-model="receive" placeholder-style="color: #9F9380;"/>
			</view>
			<view class="btn" @tap="fetch">立即转账</view>
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
	import user from "@/api/user.js"
	import login from "@/api/login.js"
	export default {
		data() {
			return {
				wallet:0,
				num:"",
				name: '',
				bank: "",
				card: '',
				receive:'',
				option:[{
					text: '银行卡',
					value: 2
				},{
					text: '币安',
					value: 0
				}, {
					text: '波场',
					value: 1
				}],
				data:{
					0: '币安',
					1: '波场',
					2: '银行卡'
				},
				code: '',
				sms: 0,
				getCodeText: '获取验证码',
				getCodeBtnColor: "#9F9380",
				getCodeisWaiting: false,
				show: false,
				user: {
					acc: '',
					face: '',
					uid: 0,
					phone: "",
					level: "",
					inviteCode: "",
					inviteUrl: "",
					have_pay_pwd: 0,
					areaCode:""
				},
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
					this.user = res.data.data
				})
			},
			fetch(){
				const data = {
					sms_id:this.sms,
					sms_code: this.code,
					toAddr: this.receive,
					value: this.num,
					type: this.wallet,
					cg_name: this.name,
					cg_bank: this.bank,
					bank_card: this.card,
				}
				uni.showLoading({
					title: '提现中...'
				})
				user.withdraw(data).then(res => {
					uni.hideLoading()
					uni.showToast({title: '提现成功',icon:"success"});
					// uni.navigateBack();
					this.show = true;
				},res => {
					uni.hideLoading()
				})
			},
			Timer() {},
			getCode() {
				uni.hideKeyboard()
				if (this.getCodeisWaiting) {
					return;
				}
				if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.user.phone))) {
					uni.showToast({
						title: '请填写正确手机号码',
						icon: "none"
					});
					return false;
				}
				this.getCodeText = "发送中..."
				this.getCodeisWaiting = true;
				this.getCodeBtnColor = "#9F9380"
				login.send({
					phone: this.user.phone,
					areaCode:this.user.areaCode,
				}).then(res => {
					uni.showToast({
						title: res.data.data.msg,
						icon: "none"
					});
					//示例默认1234，生产中请删除这一句。
					this.sms = res.data.data.smsId;
					this.setTimer();
				})
			},
			setTimer() {
				let holdTime = 60;
				this.getCodeText = "重新获取(60)"
				this.Timer = setInterval(() => {
					if (holdTime <= 0) {
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#9F9380";
						this.getCodeText = "获取验证码"
						clearInterval(this.Timer);
						return;
					}
					this.getCodeText = "重新获取(" + holdTime + ")"
					holdTime--;
			
				}, 1000)
			},
		}
	}
</script>

<style lang="scss">
	@import "../../../static/css/login.scss";
	/deep/ .checklist-box{
		margin-right:30upx !important;
	}
	
</style>
