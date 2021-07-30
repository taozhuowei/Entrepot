<template>
	<view class="page-container">
		<coupon size="lg" v-for="item in couponList" :key="item.id"
			class="coupon">
			<template>
				<u-button class="button">立即使用</u-button>
			</template>
		</coupon>
	</view>
</template>

<script>
export default {
    data() {
        return {
            couponList: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
                {
                    id: 4
                },
                {
                    id: 5
                },
            ]
        };
    }
};
</script>

<style lang="scss">
	.coupon {
		margin-top: $uni-spacing-base;
	}

	.button {
		width: 150rpx;
		height: 70rpx;
		margin: 0;
		background-color: $uni-color-main;
		color: $uni-text-color-inverse;
	}
</style>
