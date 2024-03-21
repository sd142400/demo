<template>
	<view>
		<view v-if="showHeader" class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<view v-if="showHeader" class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="addr"></view>
			<view class="input-box">

			</view>
			<!-- <view class="icon-btn">
				<view class="icon tongzhi" @tap="toMsg"></view>
				<view class="icon setting" @tap="toSetting"></view>
			</view> -->
		</view>
		<!-- 占位 -->
		<view v-if="showHeader" class="place"></view>
		<!-- 用户信息 -->
		<view class="user">
			<!-- 头像 -->
			<view class="left">
				<image :src="user.face" @tap="toSetting"></image>
			</view>
			<!-- 昵称,个性签名 -->
			<view class="right">
				<view class="username">{{user.acc}}</view>
				<view class="signature" @tap="toSetting">
					&nbsp;
					<!-- <image src = "/static/img/user/vip.png"></image> -->
				</view>
			</view>
			<!-- 二维码按钮 -->
			<view class="erweima" @tap="toSetting">
				<!-- <view class="icon qr"></view> -->
				<view class="right"><uni-icons style="color:#9F9380" type="forward"></uni-icons></view>
			</view>
		</view>
		<!-- VIP banner -->
		<view class="VIP">
			<!-- <view class="img">
				<image src=""></image>
			</view> -->
			<view class="title"></view>
			<view class="tis"></view>
			<view class="share"></view>
		</view>
		<!-- 订单-余额 -->
		<view class="order">
			<view class="btns" @tap="toAddress">
				<view>
					<image style="width:56upx;height:56upx" src="/static/img/user/cz-b.png"></image>
				</view>
				<view>
					<image style="width:56upx;height:44upx" src="/static/img/user/cz.png"></image>
				</view>
			</view>
			<view class="btns" @tap="toWithdraw">
				<view>
					<image style="width:56upx;height:56upx" src="/static/img/user/tx-b.png"></image>
				</view>
				<view>
					<image style="width:56upx;height:44upx" src="/static/img/user/tx.png"></image>
				</view>
			</view>
			<view class="btns" @tap="toTransfer">
				<view>
					<image style="width:56upx;height:56upx" src="/static/img/user/zz-b.png"></image>
				</view>
				<view>
					<image style="width:56upx;height:44upx" src="/static/img/user/zz.png"></image>
				</view>
			</view>
			<view style="clear:both;"></view>
		</view>
		<!-- 工具栏 -->
		<view class="toolbar">
			<view class="items">
				<view class="icon">
					<image src="/static/img/user/icon1.png"></image>
				</view>
				<view class="name">USDT</view>
				<view class="right">0</view>
				<view class="clear"></view>
			</view>
			<view class="items">
				<view class="icon">
					<image src="/static/img/user/icon2.png"></image>
				</view>
				<view class="name">波场</view>
				<view class="right"><uni-icons style="color:#9F9380" type="forward"></uni-icons></view>
				<view class="clear"></view>
			</view>
			<view class="items">
				<view class="icon">
					<image src="/static/img/user/icon3.png"></image>
				</view>
				<view class="name">币安</view>
				<view class="right"><uni-icons style="color:#9F9380" type="forward"></uni-icons></view>
				<view class="clear"></view>
			</view>
			<view class="items">
				<view class="icon">
					<image src="/static/img/user/icon4.png"></image>
				</view>
				<view class="name">质押</view>
				<view class="right">0</view>
				<view class="clear"></view>
			</view>
		</view>
		<view class="toolbar">
			<view class="items" @tap="toList">
				<view class="icon">
					<!-- <image src = "/static/img/user/icon1.png"></image> -->
					我的质押
				</view>
				<!-- <view class =  "name">USDT</view> -->
				<view class="right"><uni-icons style="color:#9F9380" type="forward"></uni-icons></view>
				<view class="clear"></view>
			</view>
			<view class="items" @tap="toDtail">
				<view class="icon">
					<!-- <image src = "/static/img/user/icon1.png"></image> -->
					资金明细
				</view>
				<!-- <view class =  "name">USDT</view> -->
				<view class="right"><uni-icons style="color:#9F9380" type="forward"></uni-icons></view>
				<view class="clear"></view>
			</view>
			<!-- <view class="items" @tap="toAddress">
				<view class="icon">
					钱包地址
				</view>
				<view class="right"><uni-icons style="color:#9F9380" type="forward"></uni-icons></view>
				<view class="clear"></view>
			</view> -->
			<view class="items" @tap="toTeam">
				<view class="icon">
					<!-- <image src = "/static/img/user/icon1.png"></image> -->
					我的团队
				</view>
				<!-- <view class =  "name">USDT</view> -->
				<view class="right"><uni-icons style="color:#9F9380" type="forward"></uni-icons></view>
				<view class="clear"></view>
			</view>
		</view>
	</view>
</template>
<script>
	import user from "@/api/user.js"
	export default {
		data() {
			return {
				isfirst: true,
				headerPosition: "fixed",
				headerTop: null,
				statusTop: null,
				showHeader: true,
				//个人信息,
				user: {
					acc: '',
					face: '',
					uid: 0,
					phone: "",
					level: "",
					inviteCode: "",
					inviteUrl: "",
					have_pay_pwd: 0
				},
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
			this.headerTop = e.scrollTop >= 0 ? null : 0;
			this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
		},
		onLoad() {
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
		},
		onReady() {
			//此处，演示,每次页面初次渲染都把登录状态重置
			uni.setStorage({
				key: 'UserInfo',
				data: false,
				success: function() {},
				fail: function(e) {}
			});
		},
		onShow() {
			uni.getStorage({
				key: 'UserInfo',
				success: (res) => {
					if (!res.data) {
						if (this.isfirst) {
							//this.toLogin();
						}
						return;
					}
					this.user = res.data;
				},
				fail: (e) => {
					//this.toLogin(); 
				}
			});
		},
		created() {
			this.fetchInfo()
			this.fetchInvite()
		},
		methods: {
			fetchInfo() {
				user.info().then(res => {
					this.user = res.data.data
					this.user.face = '/static/img/user/DAY'+this.user.headImg+'.png'
				})
			},
			fetchInvite(){
				user.invite().then(res => {
					console.log(res.data.data)
					// this.user = res.data.data
				})
			},
			//消息列表
			toMsg() {
				uni.navigateTo({
					url: '../../msg/msg'
				})
			},
			toOrderList(index) {
				uni.setStorageSync('tbIndex', index);
				uni.navigateTo({
					url: '../../user/order_list/order_list?tbIndex=' + index
				})
			},
			toSetting() {
				uni.navigateTo({
					url: '../../user/setting/setting'
				})
			},
			toMyQR() {
				uni.navigateTo({
					url: '../../user/myQR/myQR'
				})
			},
			toRecharge() {
				uni.navigateTo({
					url: '../../user/money/recharge'
				})
			},
			toTransfer() {
				uni.navigateTo({
					url: '../../user/money/transfer'
				})
			},
			toWithdraw() {
				uni.navigateTo({
					url: '../../user/money/withdraw'
				})
			},
			toList() {
				uni.navigateTo({
					url: '../../user/bottom/list'
				})
			},
			toDtail() {
				uni.navigateTo({
					url: '../../user/bottom/detail'
				})
			},
			toAddress() {
				uni.navigateTo({
					url: '../../user/bottom/address'
				})
			},
			toTeam() {
				uni.navigateTo({
					url: '../../user/bottom/team'
				})
			},
			toLogin() {
				uni.showToast({
					title: '请登录',
					icon: "none"
				});
				uni.navigateTo({
					url: '../../login/login'
				})
				this.isfirst = false;
			},
			isLogin() {
				//实际应用中,用户登录状态应该用token等方法去维持登录状态.
				const value = uni.getStorageSync('UserInfo');
				if (value) {
					return true;
				}
				return false
			},
			toDeposit() {
				uni.navigateTo({
					url: '../../user/deposit/deposit'
				})
			},
			toPage(url) {
				if (!url) {
					uni.showToast({
						title: '模板未包含此页面',
						icon: "none"
					});
					return;
				}
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>
<style lang="scss">
	page {
		position: relative;
		background-color: #F9F3E7;
	}

	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #f06c7a;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */

	}

	.header {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #F9F3E7;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);

		/*  #endif  */
		.icon-btn {
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;

			.icon {
				color: #fff;
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
	}

	.place {
		background-color: #F9F3E7;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}

	.place-bottom {
		height: 300upx;
	}

	.user {
		width: 92%;
		padding: 0 4%;
		display: flex;
		align-items: center;
		// position: relative;
		background-color: #F9F3E7;
		background-image: url('/static/img/user/bg.png');
		background-size: cover;
		padding-bottom: 120upx;

		.left {
			width: 20vw;
			height: 20vw;
			flex-shrink: 0;
			margin-right: 20upx;
			border: solid 1upx #fff;
			border-radius: 100%;

			image {
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}

		}

		.right {
			width: 100%;

			.username {
				font-size: 36upx;
				color: #4A3A35;
			}

			.signature {
				margin-top: 10upx;
				color: #eee;
				font-size: 28upx;
				background-image: url('/static/img/user/vip.png');
				background-repeat: no-repeat;
				height: 40upx
			}
		}

		.erweima {
			flex-shrink: 0;
			width: 10vw;
			height: 10vw;
			margin-left: 5vw;
			border-radius: 100%;

			display: flex;
			justify-content: center;
			align-items: center;

			// background: linear-gradient(to left, #fbbb37 0%,#fcf0d0 105%);
			.icon {
				color: #7b6335;
				font-size: 42upx;
			}
		}
	}

	.order {
		width: 98%;
		height: 168upx;
		margin: 0upx auto;
		margin-top: -80upx;
		// padding: 30upx 4% 20upx 4%;
		// background-color: #FFFBF1;
		// box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		// border-radius: 15upx;
		padding-top: 46upx;
		background-image: url('/static/img/user/order-bg.png');
		background-repeat: no-repeat;
		background-size: cover;

		.btns {
			float: left;
			width: 33.3%;
			text-align: center;
		}
	}

	.VIP {
		width: 100%;
		height: 220upx;
		margin: -100upx auto 0 auto;
		// background: linear-gradient(to left, #dea96d 0%,#f6d59b 100%);
		background-image: url('/static/img/user/vip-bg.png');
		background-repeat: no-repeat;
		background-size: cover;
		// box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.2);
		border-radius: 15upx;
		display: flex;
		align-items: center;

		.title {
			width: 104upx;
			height: 40upx;
			margin-left: 120upx;
			margin-top: 28upx;
			color: #796335;
			font-size: 30upx;
			background-image: url('/static/img/user/vip-font.png');
			background-repeat: no-repeat;
		}

		.tis {
			width: 112upx;
			height: 28upx;

			margin-left: 30upx;
			margin-top: 34upx;
			display: flex;
			color: #fcf0d0;
			font-size: 26upx;
			background-image: url('/static/img/user/invite.png');
			background-repeat: no-repeat;
		}

		.share {
			margin-left: 140upx;
			margin-top: 24upx;
			width: 132upx;
			display: flex;
			justify-content: flex-end;
			height: 48upx;
			background-image: url('/static/img/user/share.png');
			background-repeat: no-repeat;
		}
	}

	.toolbar {
		width: 92%;
		margin: 0 4% 24upx 4%;
		background-color: #FFFBF1;
		box-shadow: 0upx 0upx 25upx rgba(0, 0, 0, 0.1);
		border-radius: 15upx;

		.items {
			border: 1upx solid #eee;

			.icon {
				padding: 26upx 0 26upx 32upx;
				float: left;
				font-size: 32upx;
				font-weight: 400;

				image {
					width: 48upx;
					height: 48upx;
					border-radius: 48upx;
				}
			}

			.name {
				padding: 38upx 0 26upx 32upx;
				float: left;
			}

			.right {
				padding: 38upx 48upx 0upx 0upx;
				float: right;
			}

			.clear {
				clear: both;
			}
		}
	}
</style>