<template>
	<view>
		<view class="logo">
			<view class="img">
				<image mode = "widthFix" src = "/static/img/login/logo.png" />
			</view>
		</view>
		<view class="title">
			For iphone Version 2.7(3)
		</view>
		<!-- <view class="btn" v-show="showBtn" @tap="printscreen">
			{{tis}}
		</view>
		<view class="logo">
			<image mode="widthFix" src="../../../static/img/qrlogo.png"></image>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tis:"保存到相册",
				showBtn:false
			};
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.showBtn = true;
			// #endif
		},
		methods:{
			// 截图，调用webview、Bitmap方法
			printscreen(){
				this.tis = "正在保存"
				let ws=this.$mp.page.$getAppWebview();
				let bitmap = new plus.nativeObj.Bitmap();
				this.showBtn = false;
				this.$nextTick(function(){
					setTimeout(()=>{
						ws.draw(bitmap,(e)=>{
							this.showBtn = true;
							console.log('bitmap绘制图片成功');
							console.log("e: " + JSON.stringify(e));
							bitmap.save("_doc/Qr.jpg", {
								overwrite: true,
								quality: 100
							}, (i)=>{
								plus.gallery.save(i.target,(e)=>{
									uni.showToast({
										title:'保存成功'
									})
									this.tis = "保存到相册"
									bitmap.clear(); //销毁
								},(e)=>{
									bitmap.clear(); //销毁
								});
							},(e)=>{
								console.log('保存图片失败：' + JSON.stringify(e));
							});
						},(e)=>{
							console.log('bitmap绘制图片失败：'+JSON.stringify(e));
						});
					},200)
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F9F3E7;
}
.logo {
	width: 100%;
	height: 45vw;
	display: flex;
	justify-content: center;
	align-items: center;
	.img {
		width: 25%;
		height: 25vw;

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
	margin-top: 50upx;
	display: flex;
	justify-content: center;
	font-size: 36upx;
	color: #4A3A35;
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
