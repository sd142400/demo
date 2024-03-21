<template>
	<view>
		<view style="width:100%">
			<image style="width:100%" :src="item.img"></image>
		</view>
		<view class="item-info">
			<view class="info_title">{{item.name}}</view>
			<view class="info-nickname"> 文化碎片值：{{item.price_all}}</view>
			<view class="info-nickname">起购量：{{item.price_unit}}</view>
			<view class="info-nickname">日化率：{{item.award_day_percent * 100}}%</view>
			<view class="info-nickname">
				<view style="color:#956E31;float:left;">{{item.info}}</view>
				<view style="color:#956E31;float:right;font-size:28upx;">限购{{item.limit_num}}份</view>
				<view style="clear:both; padding-top:42upx;">
					<progress :percent="item.residue_percent" show-info font-size="24upx" stroke-width="12" activeColor="#956E31"
						border-radius="100" />
				</view>
			</view>
		</view>
		<view class="btn" @tap="buy">立即参与</view>
		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="discard" @tap="hideSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<view class="title">购买商品</view>
					<view style="margin-top:32upx;">
						<view style="float:left;width:160upx;height:160upx;border-radius: 20upx;">
							<image style="width:100%;height:100%;border-radius: 20upx;" :src="item.img">
							</image>
						</view>
						<view style="float:left;margin-left:28upx;">
							<view style="color:#4A3A35;font-size:48upx;font-weight: 500;line-height: 48upx;">
							{{item.price_unit}}
							</view>
							<view
								style="color:#756860;font-size:32upx;font-weight: 400;line-height: 48upx;margin-top:16upx;">
								日化率：{{item.award_day_percent * 100}}%</view>
							<view style="color:#756860;font-size:32upx;font-weight: 400;line-height: 48upx;">
								{{item.name}}
							</view>
						</view>
						<view class="clear"></view>
					</view>
					<view class="length">
						<view class="text">购买数量</view>
						<view class="number">
							<view class="sub" @tap.stop="sub">
								<view class="icon jian"></view>
							</view>
							<view class="input" @tap.stop="discard">
								<input type="number" v-model="num" />
							</view>
							<view class="add" @tap.stop="add">
								<view class="icon jia"></view>
							</view>
						</view>
					</view>
				</view>
				<view style="margin-top: 128upx;">
					<view style="float:left;">
						<span style="font-size: 32upx;color:#4A3A35;">合计：</span>
						<span style="font-size: 48upx;color:#4A3A35;font-weight: 500;">
							{{num*item.price_unit}}
						</span>
					</view>
					<view class="btn" style="width:264upx;height:80upx;float:right;margin-top:0;" @tap="buySafe">立即参与
					</view>
					<view class="clear"></view>
				</view>
			</view>
		</view>
		<!-- <view class="aaa spec" :class="typeClass" @touchmove.stop.prevent="discard" @tap="hideType">
			<!-- 遮罩层 
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<view class="title">支付方式</view>
					<view style="margin-top:32upx;">
						<view style="float:left;">
							<view style="margin-top: 24upx;">
								<view style="color:#4A3A35;font-size:40upx;line-height: 60upx;">USDT</view>
								<view style="color:#9F9380;font-size:24upx;line-height: 32upx;">10000</view>
							</view>
							<view style="margin-top: 24upx;">
								<view style="color:#4A3A35;font-size:40upx;line-height: 60upx;">USDT(TRON)</view>
								<view style="color:#9F9380;font-size:24upx;line-height: 32upx;">10000</view>
							</view>
							<view style="margin-top: 24upx;">
								<view style="color:#4A3A35;font-size:40upx;line-height: 60upx;">USDT(BNB)</view>
								<view style="color:#9F9380;font-size:24upx;line-height: 32upx;">10000</view>
							</view>
						</view>
						<view style="float:right;">
							<uni-data-checkbox selectedColor="#956E31" mode="list" v-model="pay" :localdata="options" />
						</view>
						<view class="clear"></view>
					</view>
				</view>
				<view style="margin-top: 54upx;">
					<view class="btn" style="margin-top:0;" @tap="buySafe">去支付</view>
				</view>
			</view>
		</view> -->
		<view class="bbb spec" :class="safeClass" @touchmove.stop.prevent="discard" @tap="hideSafe">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<view class="title">请输入安全密码</view>
					<view class="pwd">
						<input placeholder="请输入密码" type = "password" v-model="pwd" placeholder-style="color: #9F9380;" />
					</view>
					<view style="margin-top:72upx;margin-bottom:32upx;">
						<view @tap="hideSafe"
							style="float:left;width:50%;text-align: center;color:#9F9380;font-size:32upx;line-height: 48upx;">
							取消
						</view>
						<view
							style="float:left;width:50%;text-align: center;color:#956E31;font-size:32upx;line-height: 48upx;" @tap="fetchBuy">
							确定
						</view>
						<view class="clear"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import home from "@/api/home.js"
	export default {
		data() {
			return {
				id:"",
				selectSpec: null, //选中规格
				specClass: '', //规格弹窗css类，控制开关动画
				typeClass: '', //规格弹窗css类，控制开关动画
				safeClass: '', //规格弹窗css类，控制开关动画
				num: 1,
				pay: 0,
				pwd: '',
				item: {
					"id": 0,
					"name": "",
					"img": "",
					"price_unit": 0,
					"price_all": 0,
					"limit_num": 0,
					"amount_stock": 0,
					"residue_percent": "0",
					"keep_days": 0,
					"award_day_percent": 0,
					"info": ""
				},
				options: [{
					"value": 0,
					"text": ""
				}, {
					"value": 1,
					"text": ""
				}, {
					"value": 2,
					"text": ""
				}]
			};
		},
		onLoad(option) {
			this.id = option.id
		},
		onReady() {},
		onPageScroll(e) {},
		mounted() {
			this.fetch()
		},
		created() {
			// this.fetch()
		},
		methods: {
			fetch() {
				console.log(this.id)
				//this.$route.query.id
				home.itemid({
					item_id: this.id
				}).then(res => {
					this.item = res.data.data
				})
			},
			fetchBuy(){
				const data = {
					item_id: this.id,
					item_num: this.num,
					pay_pwd: this.pwd
				}
				
				home.buy(data).then(res => {
					uni.showToast({
						title: '购买成功'
					});
					this.hideSafe()
				})
			},
			buy() {
				this.showSpec();
			},
			buyType() {
				this.showType();
			},
			buySafe() {
				this.showSafe();
			},
			sub() {
				if (this.num <= 1) {
					return;
				}
				this.num--;
			},
			//增加数量
			add() {
				this.num++;
			},
			//返回上一页
			back() {
				uni.navigateBack();
			},
			//规格弹窗
			showSpec(fun) {
				console.log('show');
				this.specClass = 'show';
				this.typeClass = 'none';
				this.safeClass = 'none';
				this.specCallback = fun;
			},
			//关闭规格弹窗
			hideSpec() {
				this.specClass = 'hide';
				this.typeClass = 'none';
				this.safeClass = 'none';
				//回调

				this.specCallback = false;
				setTimeout(() => {
					this.specClass = 'none';
				}, 200);
			},
			//规格弹窗
			showType(fun) {
				console.log('show');
				this.specClass = 'none';
				this.typeClass = 'show';
				this.safeClass = 'none';
				this.typeCallback = fun;
			},
			//关闭规格弹窗
			hideType() {
				this.specClass = 'none';
				this.typeClass = 'hide';
				this.safeClass = 'none';
				//回调

				this.typeCallback = false;
				setTimeout(() => {
					this.typeClass = 'none';
				}, 200);
			},
			//规格弹窗
			showSafe(fun) {
				this.specClass = 'none';
				this.typeClass = 'none';
				this.safeClass = 'show';
				this.safeCallback = fun;
			},
			//关闭规格弹窗
			hideSafe() {
				this.specClass = 'none';
				this.typeClass = 'none';
				this.safeClass = 'hide';
				//回调

				this.safeCallback = false;
				setTimeout(() => {
					this.safeClass = 'none';
				}, 200);
			},

			discard() {
				//丢弃
			}
		}
	};
</script>

<style lang="scss">
	.clear {
		clear: both;
	}

	page {
		background-color: #F7F3E8;
	}

	@keyframes showPopup {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes hidePopup {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes showLayer {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-100%);
		}
	}

	@keyframes hideLayer {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(0);
		}
	}

	.item-info {
		padding: 40upx;
		background-image: url('/static/img/goods/bg.png');
		background-repeat: no-repeat;
	}

	.info_title {
		height: 60upx;
		opacity: 1;
		/** 文本1 */
		font-size: 40upx;
		font-weight: 500;
		letter-spacing: 0px;
		line-height: 60upx;
		color: rgba(74, 58, 53, 1);
		text-align: left;
		vertical-align: top;
		padding-bottom: 24upx;
	}

	.info-nickname {
		height: 44upx;
		opacity: 1;

		/** 文本1 */
		font-size: 28upx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 44upx;
		color: rgba(117, 104, 96, 1);
		text-align: left;
		vertical-align: top;

		display: block;

		/deep/ .uni-progress-info {
			font-size: 20upx;
		}

		/deep/ .uni-progress-inner-bar {
			border-radius: 200upx;
		}

	}

	.btn {
		color: #fff;
		width: 90%;
		margin: 0 auto;
		height: 90upx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 15upx;
		background-color: #956E31;
		font-size: 40upx;
		margin-top: 160upx;
	}

	.popup {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 20;
		display: none;

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			background-color: #F7F3E8;
			position: fixed;
			z-index: 22;
			bottom: -55%;
			width: 92%;
			padding: 0 4%;
			height: 54%;
			border-radius: 20upx 20upx 0 0;
			flex-wrap: wrap;
			align-content: space-between;
		}

		.title {
			height: 34upx;
			opacity: 1;
			/** 文本1 */
			font-size: 34upx;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 34upx;
			color: rgba(74, 58, 53, 1);
			text-align: center;
			vertical-align: middle;
		}

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		&.spec {
			.title {
				font-size: 30upx;
				margin: 30upx 0;
			}

			.sp {
				display: flex;

				view {
					font-size: 28upx;
					padding: 5upx 20upx;
					border-radius: 8upx;
					margin: 0 30upx 20upx 0;
					background-color: #f6f6f6;

					&.on {
						padding: 3upx 18upx;
						border: solid 1upx #f47925;
					}
				}
			}

			.length {
				margin-top: 30upx;
				justify-content: space-between;
				align-items: center;
				padding-top: 20upx;
				display: flex;

				.text {
					font-size: 30upx;
					display: flex;
				}

				.number {
					justify-content: center;
					align-items: center;
					display: flex;

					.input {
						width: 80upx;
						height: 60upx;
						margin: 0 10upx;
						background-color: #F7F3E8;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;

						input {
							width: 80upx;
							height: 60upx;
							display: flex;
							justify-content: center;
							align-items: center;
							text-align: center;
							font-size: 26upx;
						}
					}

					.sub,
					.add {
						width: 60upx;
						height: 60upx;
						background-color: #EDE5D1;
						border-radius: 5upx;

						.icon {
							font-size: 30upx;
							width: 60upx;
							height: 60upx;
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
				}
			}
		}
	}

	.aaa {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 20;
		display: none;

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			background-color: #F7F3E8;
			position: fixed;
			z-index: 22;
			bottom: -55%;
			width: 92%;
			padding: 0 4%;
			height: 54%;
			border-radius: 20upx 20upx 0 0;
			flex-wrap: wrap;
			align-content: space-between;
		}

		.title {
			height: 34upx;
			opacity: 1;
			/** 文本1 */
			font-size: 34upx;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 34upx;
			color: rgba(74, 58, 53, 1);
			text-align: center;
			vertical-align: middle;
		}

		/deep/ .is--list {
			padding: 44upx 30upx !important;
		}

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		&.spec {
			.title {
				font-size: 30upx;
				margin: 30upx 0;
			}

			.sp {
				display: flex;

				view {
					font-size: 28upx;
					padding: 5upx 20upx;
					border-radius: 8upx;
					margin: 0 30upx 20upx 0;
					background-color: #f6f6f6;

					&.on {
						padding: 3upx 18upx;
						border: solid 1upx #f47925;
					}
				}
			}
		}
	}

	.bbb {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 20;
		display: none;

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			background-color: #F7F3E8;
			position: fixed;
			z-index: 22;
			bottom: 30%;
			width: 80%;
			left: 6%;
			margin: 0 auto;
			padding: 0 4%;
			border-radius: 20upx;
			flex-wrap: wrap;
			align-content: space-between;
		}

		.title {
			height: 34upx;
			opacity: 1;
			/** 文本1 */
			font-size: 34upx;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 34upx;
			color: rgba(74, 58, 53, 1);
			text-align: center;
			vertical-align: middle;
		}

		.pwd {
			width: calc(100% - 90upx);
			height: 90upx;
			display: flex;
			align-items: center;
			border-radius: 15upx;
			background-color: #F0EAD9;
			padding: 0 45upx;
			margin-bottom: 26upx;
			background-repeat: no-repeat;
			background-position: 32upx 28upx;

			// background-size:1.5% 50%;
			input {
				width: 100%;
				height: 50upx;
				color: #9F9380;
				font-weight: 200;
			}

			.uni-input-placeholder {
				text-align: center;
			}
		}

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		&.spec {
			.title {
				font-size: 30upx;
				margin: 30upx 0;
			}

			.sp {
				display: flex;

				view {
					font-size: 28upx;
					padding: 5upx 20upx;
					border-radius: 8upx;
					margin: 0 30upx 20upx 0;
					background-color: #f6f6f6;

					&.on {
						padding: 3upx 18upx;
						border: solid 1upx #f47925;
					}
				}
			}
		}
	}
</style>