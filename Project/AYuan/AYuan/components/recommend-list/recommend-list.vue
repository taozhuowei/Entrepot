<template>
	<u-sticky offset-top="100">
		<u-tabs :list="tabs" :is-scroll="false" :current="currentTabIndex" active-color="#392f41"
			inactive-color="#c2ccd0" :bar-style="{backgroundColor: '#0eb83a'}" @change="handleChangeTab">
		</u-tabs>

		<view class="waterfall-wrapper">
			<u-waterfall v-model="goodsList">
				<template v-slot:left="leftList">
					<view class="goods-cards-wrapper" v-for="(item , index) in leftList" :key="index">
						<goods-card></goods-card>
					</view>

				</template>

				<template v-slot:right="rightList">
					<view class="goods-cards-wrapper" v-for="(item , index) in rightList" :key="index">
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
				tabs: [{
						name: '为您推荐'
					},
					{
						name: '阿圆优选'
					},
					{
						name: '会员优惠'
					},
					{
						name: '季节限定'
					},
				],
				currentTabIndex: 0,
				goodsList: [],
			};
		},
		methods: {
			handleChangeTab(index) {
				this.currentTabIndex = index
			}
		}
	}
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
