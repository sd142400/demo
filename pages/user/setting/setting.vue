<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row" @tap="toResetPwd">
					<view class="title">修改登录密码</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row" @tap="toResetSafePwd">
					<view class="title">修改安全密码</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row" @tap="toMyQR">
					<view class="title">关于我们</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">版本号</view>
					<view class="right"><view class="tis">v1.0.0</view></view>
				</view>
			</view>
			<view class="btn" @tap="logout">退出登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			showType(tbIndex){
				this.tabbarIndex = tbIndex;
				this.list = this.orderList[tbIndex];
			},
			toResetPwd(){
				uni.navigateTo({
					url:'../../login/changepwd'
				})
			},
			toResetSafePwd(){
				uni.navigateTo({
					url:'../../login/resetsafepwd'
				})
			},
			toMyQR(){
				uni.navigateTo({
					url:'../../user/myQR/myQR'
				})
			},
			logout(){
				uni.setStorageSync("token", '');
				uni.showToast({title: '请登录',icon:"none"});
				uni.navigateTo({
					url:'../../login/login'
				})
			},
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F9F3E7;	
}

.icon {
	font-size: 30upx;

}
.content{
	padding-bottom: 20upx;
	.list{
		width: 96%;
		padding-left: 4%;
		background-color: #FFFBF1;
		margin-bottom: 20upx;
		.row{
			widows: 100%;
			min-height: 90upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: solid 1upx #eee;
			&:last-child{
				border-bottom: none;
			}
			.title{
				font-size: 32upx;
				color: #333;
			}
			.right{
				display: flex;
				align-items: center;
				color: #999;
				.tis{
					font-size: 26upx;
					margin-right: 40upx;
					max-height: 120upx;
					image{
						width: 100upx;
						height: 100upx;
						border-radius: 100%;
						margin: 10upx 0;
					}
				}
				.icon{
					width: 70upx;
					color: #cecece;
				}
			}
			
		}
	}
	.btn {
		color: #fff;
		width: 100%;
		height: 90upx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 15upx;
		background-color: #956E31;
		font-size: 40upx;
		margin-top:150upx;
	}
}

</style>
