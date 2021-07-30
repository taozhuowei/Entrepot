<template>
	<view class="address-card-container">
		<image :src="'../../static/'+addressType+'.png'" class="background"></image>

		<view class="wrapper">
			<view class="top">
				<text class="detail">北一里5-44号</text>
				<address-tag :tagType="addressType" :customName="customTag" v-if="!isStore"></address-tag>
			</view>

			<view class="mid">
				<text class="address">辽宁省 锦州市 古塔区 南街街道</text>
			</view>

			<view class="bottom" v-if="!isStore">
				<text class="info">陶先生 18512345678</text>
				<u-icon name="/static/edit.png" :size="30"></u-icon>
			</view>
			
			<view class="bottom" v-else>
				<text class="info">配送费 ¥1.5 包装费 ¥2.0</text>
			</view>
		</view>

	</view>
</template>

<script>
export default {
    name: "address-card",
    props: {
        addressType: String,
        customTag: {
            type: String,
            default: '',
            required: false
        }
    },
    computed: {
        isStore() {
            return this.addressType === 'store';
        }
    }
};
</script>

<style lang="scss">
	.address-card-container {
		width: $uni-width-main;
		height: 200rpx;
		margin-top: $uni-spacing-base;
		background-color: $uni-bg-color-base;
		border-radius: $uni-border-radius-base;
		position: relative;
		overflow: hidden;
	}

	.background {
		width: 400rpx;
		height: 350rpx;
		position: absolute;
		top: -50rpx;
		right: -120rpx;
	}
	
	.wrapper {
		width: 430rpx;
		height: 100%;
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	
	.top , .mid , .bottom {
		display: flex;
		justify-content: space-between;
		padding-left: $uni-spacing-lg;
		padding-right: $uni-spacing-lg;
	}
	
	.detail {
		font-size: $uni-font-size-lg;
		font-weight: bold;
	}
	
	.address {
		font-size: $uni-font-size-sm;
		color: $uni-text-color-grey;
	}
	
	.info {
		font-weight: 300;
	}
</style>
