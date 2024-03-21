<template>
	<view>
		<view style = "width: calc(100% - 96upx); margin: 48upx auto;background-color: #FFFBF1;border-radius: 20upx;padding-bottom: 1upx;">
			<view style = "color:#9F9380;font-size: 32upx;font-weight: 400;line-height: 48upx;text-align: center;padding-top:14upx;">
				<view style = "width: 100%;float:left;" @click="swap('bian')">
					<span :style = "ba">{{name}}</span>
				</view>
				<view style = "width: 50%;float:left;margin-bottom: 14upx;display: none;" @click="swap('bochang')">
					<span :style = "bc">波场</span>
				</view>
				<view class="clear" style = "border-bottom: 1px solid #f0e5d3; width:94%; margin:0 auto;"></view>
			</view>
			<view class="logo" style = "display:none;">
				<view class="img">
					<image mode = "widthFix" src = "/static/img/user/qr.png" />
				</view>
			</view>
			<view class="title">
				支付地址转入或转出变量USDT/BNB
			</view>
			<view style = "padding:24upx;background-color: #EFEADE;margin:8upx;border-bottom-left-radius: 20upx;border-bottom-right-radius: 20upx;">
				<view style = "width:87%;float:left;word-break: break-all;padding-right:3%">
					{{code}}
				</view>
				<view style = "width:10%;float:left;" @click="paste(code)">
					<image style = "width:28upx;height:28upx;" src = "/static/img/user/copy.png"></image>
				</view>
				<view class="clear">
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
				code:"",
				tab:"bian",
				ba:'border-bottom:2px solid #000;color:#4A3A35;',
				bc:'',
				name:''
			};
		},
		onLoad() {
		},
		created() {
			this.fetch()
		},
		methods:{
			fetch(){
				user.address().then(res => {
					this.code = res.data.data[0].address
					this.name = res.data.data[0].name
				})
			},
			// 截图，调用webview、Bitmap方法
			paste(value) {
			    uni.setClipboardData({
			        data: value
			    });
			},
			swap(value){
				this.tab = value;
				this.ba = "";
				this.bc = "";
				
				if(this.tab == 'bian'){
					this.ba = "border-bottom:2px solid #000;color:#4A3A35;"
				} else {
					this.bc = "border-bottom:2px solid #000;color:#4A3A35;"
				}
				
			}
		}
	}
</script>

<style lang="scss">
.clear{
	clear:both;
}
page{
	background-color: #F9F3E7;
}
.logo {
	width: 100%;
	padding-top:56upx;
	display: flex;
	justify-content: center;
	align-items: center;
	.img {
		width: 282upx;
		height: 282upx;

		image {
			width: 100%;
		}
	}
}
.block{
	width: 100%;
	height: 30vh;
	background-color: #fff;
	display: flex;
	justify-content: center;
	
}
.QR{
	width: 60vw;
	height: 60vw;
	margin: -40vw auto 0 auto;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	image{
		width: 50vw;
		height: 50vw;
	}
}
.title{
	width: 100%;
	margin-top: 40upx;
	display: flex;
	justify-content: center;
	font-size: 28upx;
	color: #4A3A35;
	margin-bottom: 40upx;
}
.btn{
	
	width: 50%;
	height: 80upx;
	border-radius: 80upx;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20upx;
	margin: 0 auto;
	margin-top: 50upx;
	background-color: rgba(255,255,255,.8);
}
// .logo{
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	position: absolute;
// 	bottom: 25upx;
// 	image{
// 		width: 39.6%;
// 	}
	
// }
</style>
