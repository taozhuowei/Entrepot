<!-- 限时抢购组件 -->
<template>
	<activity-card iconName="flashsale" title="限时抢购">
		<template slot="header">
			<u-count-down :timestamp="restTime" :show-days="false" font-size="24" bg-color="#FF2D51" color="#ffffff"
				separator-size="0" @end="handleTimeEnd">
			</u-count-down>
		</template>
	
		<!-- TODO 改成轮播 -->
		<template slot="content">
			<goods-flashsale class="goods-flashsale"></goods-flashsale>
		</template>
	</activity-card>
</template>

<script>
	export default {
		name: "flashsale",
		data() {
			return {
				restTime: 3600
			};
		},
		methods: {
			handleTimeEnd(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss">
</style>
