<!-- 优惠券组件 -->
<template>
	<view
		:class="[size === 'lg' ? 'coupon-card-lg' : 'coupon-card-sm' , 'coupon-card-container']">
		<!-- 上边内凹圆 -->
		<view class="top-circle-radius circle"></view>

		<!-- 下边内凹圆 -->
		<view class="bottom-circle-radius circle"></view>

		<!-- 优惠券金额 -->
		<view class="coupon-card-left">
			<text :style="{fontSize: priceFontSize + 'rpx'}"
				class="price">¥20</text>
			<text :style="{fontSize: limitFontSize + 'rpx'}"
				class="discount-limit">满21可用</text>
		</view>

		<!-- 优惠券右侧 -->
		<view class="coupon-card-right">
			<text :style="{fontSize: titleFontSize + 'rpx'}"
				class="title">全品类通用券</text>
			<text :style="{fontSize: infoFontSize + 'rpx'}"
				class="info">适用于所有门店</text>
				
			<view class="footer">
				<text :style="{fontSize: infoFontSize + 'rpx'}" class="info">有效期：
				2021-12-25</text>
				<slot></slot>
			</view>	
			
		</view>
	</view>
</template>

<script>
export default {
    name: "coupon",
    props: {
        size: {
            default: 'sm',
            type: String,
            required: false,
            validator: el => el === 'sm' || el === 'lg'
        },
    },
    computed: {
        //优惠券金额字号
        priceFontSize() {
            return this.size === 'lg' ? 72 : 48;
        },
        //满减金额字号
        limitFontSize() {
            return this.size === 'lg' ? 28 : 24;
        },
        //按钮字号
        buttonFontSize() {
            return this.size === 'lg' ? 36 : 24;
        },
        //标题字号
        titleFontSize() {
            return this.size === 'lg' ? 40 : 24;
        },
        //信息文字字号
        infoFontSize() {
            return this.size === 'lg' ? 24 : 24;
        }
    }
};
</script>

<style lang="scss">
	.coupon-card-container {
		position: relative;
		margin-right: $uni-spacing-base;
		flex-shrink: 0;
		display: flex;
		justify-content: space-between;
		background-color: $uni-bg-color-base;
	}

	.coupon-card-sm {
		width: 500rpx;
		height: 200rpx;
	}

	.coupon-card-lg {
		width: $uni-width-main * 0.9;
		height: 300rpx;
		margin: 0;
		border-radius: $uni-border-radius-base;
	}

	.circle {
		width: 20rpx;
		height: 20rpx;
		left: 30%;
		position: absolute;
		border-radius: $uni-border-radius-circle;
		background-color: $uni-bg-color-grey;
	}

	.top-circle-radius {
		top: -10rpx;
	}

	.bottom-circle-radius {
		bottom: -10rpx;
	}

	.coupon-card-left {
		width: 35%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.price {
		font-weight: 800;
	}

	.price,
	.discount-limit {
		color: $uni-color-emphasize;
	}
	
	.coupon-card-right {
		width: 65%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding-left: $uni-spacing-lg;
	}
	
	.title {
		font-weight: 800;
		color: $uni-text-color-title;
	}
	
	.info {
		font-weight: 300;
		color: $uni-text-color-grey;
	}

	.footer {
		width: 100%;
		padding-right: $uni-spacing-lg;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
</style>
