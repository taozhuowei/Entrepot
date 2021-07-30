<template>
	<card-v>
		<template slot="title">
			<view class="title">西瓜</view>
		</template>
		
		<template slot="footer">
			<view class="footer-content">
				<price :price="999" :vipPrice="99" :originPirce="1999"></price>
				<u-icon name="/static/addToCart.png" size="50"></u-icon>
			</view>
		</template>
	</card-v>
</template>

<script>
	export default {
		name:"goods-card",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		margin-top: $uni-spacing-base;
		margin-left: $uni-spacing-base;
	}
	
	.footer-content {
		margin-top: $uni-spacing-mini;
		margin-left: $uni-spacing-base;
		margin-right: $uni-spacing-base;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
