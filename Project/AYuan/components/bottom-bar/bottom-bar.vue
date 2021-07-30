<!-- 底栏组件 -->
<template>
	<view class="buttom-bar-container">
		<slot name="left"></slot>

		<button class="button"
			@click="emitClickButton">{{ buttonText }}</button>
	</view>
</template>

<script>
export default {
    name: "bottom-bar",
    props: {
        buttonText: String
    },
    methods: {
        emitClickButton() {
            this.$emit( 'click-button' );
        }
    }
};
</script>

<style lang="scss" scoped>
	.buttom-bar-container {
		width: 100vw;
		height: 100rpx;
		padding-left: $uni-spacing-base;
		padding-right: $uni-spacing-base;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top-left-radius: $uni-border-radius-base;
		border-top-right-radius: $uni-border-radius-base;
		background-color: $uni-bg-color-dark;
		position: fixed;
		left: 0;
		bottom: 0;
	}

	.button {
		width: 200rpx;
		height: 60rpx;
		margin: 0;

		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: $uni-border-radius-sm;
		background-color: $uni-color-main;
		font-size: $uni-font-size-base;
		color: white;
	}
</style>
