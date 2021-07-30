<!-- 纵向卡片组件 -->
<template>
	<view class="card-v-container" :style="{width: width+'rpx' , height: height+'rpx'}">
		<view class="card-header">
			<image src="" class="header-img" :style="{height: imgHeight+'rpx'}"></image>
		</view>
		
		<view class="card-main">
			<slot name="title"></slot>
			
			<view class="card-main-footer">
				<slot name="footer"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"card-v",
		props: {
			width: {
				type: Number,
				default: 300,
				required: false
			},
			height: {
				type: Number,
				default: 340,
				required: false
			},
			imgHeight: {
				type: Number,
				default: 200,
				required: false
			},
			title: String
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.card-v-container {
		border: 1px solid $uni-bg-color-grey;
		border-radius: $uni-border-radius-base;
		overflow: hidden;
	}
	
	.card-header {
		background-color: $uni-bg-color-grey;
	}
</style>
