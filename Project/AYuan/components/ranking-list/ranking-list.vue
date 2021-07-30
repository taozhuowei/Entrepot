<!-- 商品排行榜组件 -->
<template>
	<activity-card iconName="rank" title="商品热销榜">
		<template slot="content">
			<view class="ranking-content">
				<view class="ranking-content-item"
					v-for="(item,index) in rankingList" :key="index">
					
					<view class="content-left">
						<u-icon :name="'/static/no'+(index+1)+'.png'" size="30">
					</u-icon>
					<text class="item-title">{{ item.name }}</text>
					</view>
					
					<text class="sale-num">月销{{ item.saleNum }}件</text>
				</view>
			</view>
		</template>
	</activity-card>
</template>

<script>
export default {
    name: "ranking-list",
    data() {
        return {
            rankingList: [
                {
                    name: '西瓜',
                    saleNum: 20
                },
                {
                    name: '苹果',
                    saleNum: 15
                },
                {
                    name: '梨',
                    saleNum: 10
                },
            ]
        };
    }
};
</script>

<style lang="scss">
	.ranking-list-container {
		width: $uni-width-half;
		height: 280rpx;
		border-radius: $uni-border-radius-base;
		background-color: $uni-bg-color-base;
	}

	.ranking-content {
		width: 300rpx;
		height: 200rpx;
	}

	.ranking-content-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: $uni-spacing-mini;
		margin-bottom: $uni-spacing-sm;
		padding-bottom: $uni-spacing-sm;
		border-bottom: $uni-divider;
	}
	
	.sale-num {
		font-size: $uni-font-size-sm;
		color: $uni-text-color-grey;
	}

	.item-index {
		font-weight: bold;
		font-style: italic;
	}

	.item-title {
		margin-left: $uni-spacing-sm;
	}
</style>
