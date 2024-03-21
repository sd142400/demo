<template>
	<view>
		<view style="background-color: #FFFBF1;padding:24upx 40upx;margin-top: 24upx;">
			<view style = "float:left;width:64upx;height:64upx;">
				<image style="width:100%;height:100%;" src="/static/img/msg/list.png"></image>
			</view>
			<view style = "float:left;padding:8upx 24upx;font-size:32upx;line-height:48upx;color:#4A3A35;">通讯录</view>
			<view class = "clear"></view>
		</view>
		<view style="background-color: #FFFBF1;padding:24upx 40upx;margin-top: 24upx;">
			<view style = "float:left;width:64upx;height:64upx;">
				<image style="width:100%;height:100%;" src="/static/img/msg/new.png"></image>
			</view>
			<view style = "float:left;padding:8upx 24upx;font-size:32upx;line-height:48upx;color:#4A3A35;">新的朋友</view>
			<view class = "clear"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		mounted() {

		},
		methods: {

		}
	};
</script>

<style lang="scss">
	.clear {
		clear: both;
	}

	page {
		background-color: #F9F3E7;
	}
</style>