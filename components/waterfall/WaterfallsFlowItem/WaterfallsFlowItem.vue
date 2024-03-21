<template>
    <view class="wf-item-page" style = "background-color: #FFFBF1;">
        <image :src="item.img" mode="widthFix" class="item-img"/>
        <view class="item-info">
            <view class="info_title">{{ item.name }}</view>
            <view class="info-nickname"> 文化碎片值：{{ item.price_all }}</view>
            <view class="info-nickname">起购量：{{ item.price_unit }}</view>
            <view class="info-nickname">日化率：{{ item.award_day_percent * 100 }}%</view>
            <view class="info-nickname">质押：{{ item.keep_days }}天</view>
            <view class="info-nickname">
				<view style = "color:#9F9380;padding-top:16upx;float:left;">{{item.info}}</view>
				<view style = "float:right;width:60%; margin-top:16upx;font-size:20upx;">
					<progress :percent="item.residue_percent" show-info font-size = "24upx" stroke-width = "12" activeColor = "#956E31" border-radius = "100" />
				</view>
				<view style = "clear:both"></view>
			</view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            require: true
        }
    }
}
</script>

<style lang="scss" scoped>

.wf-item-page {
    background: #fff;
    overflow: hidden;
    border-radius: 5px;
}

.item-img {
    width: 100%;
}

.item-info {
    align-items: center;
    padding: 24upx;
}

.info-avatar {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 5px;
}

.info_title{
	/** 文本1 */
	font-size: 28upx;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 44upx;
	color: rgba(74, 58, 53, 1);
	text-align: left;
	vertical-align: top;
	padding-bottom: 8upx;
}

.info-nickname {
	display: block;
	
	/** 文本1 */
	font-size: 20upx;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 32upx;
	color: rgba(117, 104, 96, 1);
	text-align: left;
	vertical-align: top;
	
	/deep/ .uni-progress-info{
		font-size: 20upx;
	}
	
	/deep/  .uni-progress-inner-bar{
		border-radius: 200upx;
	}

}


</style>
