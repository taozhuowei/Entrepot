<!-- 商品推荐组件 -->
<template>
	<u-sticky offset-top="100">
		<tabs :tabs="tabs" :cur.sync="curTab"></tabs>

		<view class="waterfall-wrapper">
			<u-waterfall v-model="goodsList">
				<template v-slot:left="{leftList}">
					<view class="goods-cards-wrapper"
						v-for="(item , index) in leftList" :key="index">
						<goods-card></goods-card>
					</view>
				</template>

				<template v-slot:right="{rightList}">
					<view class="goods-cards-wrapper"
						v-for="(item , index) in rightList" :key="index">
						<goods-card></goods-card>
					</view>
				</template>
			</u-waterfall>
		</view>

	</u-sticky>
</template>

<script>
export default {
    name: "recommend-list",
    data() {
        return {
            tabs: [
                '为您推荐', '阿圆优选', '会员优惠', '季节限定'
            ],
            curTab: 0,
            goodsList: [
                {
                    a: 1
                }
            ],
        };
    },
    methods: {
        handleChangeTab( index ) {
            this.currentTabIndex = index;
        }
    }
};
</script>

<style lang="scss" scoped>
	.goods-cards-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.waterfall-wrapper {
		padding-top: $uni-spacing-base;
	}
</style>
