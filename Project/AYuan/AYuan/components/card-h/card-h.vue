<!-- 横向卡片组件 -->
<template>
	<view class="card-h-container" :style="{width: width+'rpx' , height: height+'rpx'}">
		<slot name="header"></slot>
		
		<view class="card-h-main">
			<!-- 卡片右上角标签 -->
			<view class="card-h-tag" v-if="showTag">
				<slot name="tag"></slot>
			</view>
			
			<!-- 卡片左侧图片 -->
			<view class="main-left">
				<slot name="img"></slot>
			</view>
			
			<!-- 卡片右侧信息 -->
			<view class="main-right">
				<!-- 卡片右侧上方 -->
				<slot name="main-header"></slot>
				<!-- 卡片右侧下方 -->
				<slot name="main-footer"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"CardHorizontal",
		props: {
			showTag: {
				type:Boolean,
				default:false,
				required:false
			},
			width: {
				type: Number,
				default: 480,
				required: false
			},
			height: {
				type: Number,
				default: 200,
				required: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card-h-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		border-radius: $uni-border-radius-base;
		border: $uni-border;
		overflow: hidden;
		position: relative;
		background-color: $uni-bg-color-base;
	}
	
	.card-h-tag {
		width: 80rpx;
		height: 40rpx;
		position: absolute;
		top: 10rpx;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: $uni-color-emphasize;
		color: white;
		font-size: $uni-font-size-mini;
	}
	
	.card-h-main {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}
	
	.main-left {
		width: 40%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top-left-radius: $uni-border-radius-base;
		border-bottom-left-radius: $uni-border-radius-base;
		background-color: $uni-bg-color-grey;
		border: none;
	}
	
	.main-right {
		width: 60%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		border-top-right-radius: $uni-border-radius-base;
		border-bottom-right-radius: $uni-border-radius-base;
		border: none;
	}	
</style>
