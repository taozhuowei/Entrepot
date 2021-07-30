<!-- 首页顶部信息栏组件 -->
<template>
	<view class="info-bar-container">
		<view @click="toAddress" class="info-bar-item">
			<u-icon name="/static/location.png" size="60" />
			<text class="shop-name">
				未知门店
			</text>
		</view>

		<view @click="toUserCenter" class="info-bar-item">
			<text class="nickname">
				尚未登录
			</text>
			<u-icon name="/static/me.png" size="60" />
		</view>
	</view>
	</view>
</template>

<script>
export default {
    name: "InfoBar",
    data() {
        return {

        };
    },
    methods: {
        toAddress() {
            uni.navigateTo( {
			    url: '../../pages/address/address?pageType=shop'
            } );
        },
		
        toUserCenter() {
            uni.navigateTo( {
                url: '../../pages/user/user'
            } );
        }
    }
};
</script>

<style lang="scss">
	.info-bar-container {
		width: 100%;
		height: 100rpx;
		padding-left: $uni-spacing-base;
		padding-right: $uni-spacing-base;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: $uni-bg-color;
	}

	.info-bar-item {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.shop-name {
		color: $uni-text-color-inverse;
		margin-left: $uni-spacing-base;
	}

	.nickname {
		font-size: $uni-font-size-lg;
		font-weight: 500;
		color: $uni-text-color-title;
		margin-right: $uni-spacing-base;
	}
</style>
