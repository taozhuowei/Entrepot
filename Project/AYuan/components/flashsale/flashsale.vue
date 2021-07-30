<!-- 限时抢购组件 -->
<template>
	<activity-card iconName="flashsale" title="限时抢购">
		<template slot="header">
			<u-count-down :timestamp="restTime" :show-days="false"
				font-size="24" :height="30" bg-color="#FF2D51" color="white"
				separator-color="#FF2D51" separator-size="12"
				@end="handleTimeEnd">
			</u-count-down>
		</template>

		<template slot="content">
			<swiper autoplay class="swiper">
				<swiper-item>
					<goods-flashsale class="goods-flashsale"></goods-flashsale>
				</swiper-item>
				
				<swiper-item>
					<goods-flashsale class="goods-flashsale"></goods-flashsale>
				</swiper-item>
				
				<swiper-item>
					<goods-flashsale class="goods-flashsale"></goods-flashsale>
				</swiper-item>
			</swiper>
			
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
        handleTimeEnd( e ) {
            console.log( e );
        }
    }
};
</script>

<style lang="scss">
	.swiper {
		width: 300rpx;
		height: 200rpx;
	}
</style>