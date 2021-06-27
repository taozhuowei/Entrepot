<!-- 轮播图组件 -->
<template>
	<view class="banner-container">
		<u-swiper :list="bannerList" mode="rect" :effect3d="true" border-radius="20"></u-swiper>
	</view>
</template>

<script>
	export default {
		name:"banner",
		data() {
			return {
				bannerList: [
					"/static/banner1.png",
					"/static/banner2.png",
					"/static/banner3.png",
				]
			};
		}
	}
</script>

<style lang="scss">
	.banner-container {
		width: $uni-width-main;
	}
</style>
