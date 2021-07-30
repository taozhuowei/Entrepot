<template>
	<view class="aside-bar-container" ref="aside">
		<!-- 包裹所有侧边栏的项 -->
		<view class="aside-items-wrapper">
			<!-- 侧边栏的项 -->
			<view v-for="(item , index) in itemList" :key="index"
				:class="['aside-item' , activeItem === index ? 'active' : 'inactive']" :data-index="index"
				@click="handleChangeItem(index)" ref="items">
				
				<!-- 项中的图标和名称 -->
				<u-icon :name="'/static/'+item.icon+'.png'" size="30"></u-icon>
				<text class="aside-item-title">{{ item.dicName }}</text>
			</view>
		</view>
		
		<!-- 下方的矩形 -->
		<view class="under-wrapper" ref="under"></view>
	</view>
</template>

<script>
	export default {
		name: "aside-bar",
		data() {
			return {
				itemList: [
					{
						icon: 'selected',
						dicName: '阿圆优选'
					},
					{
						icon: 'season',
						dicName: '季节限定'
					},
					{
						icon: 'new',
						dicName: '新品上市'
					},
					{
						icon: 'vip',
						dicName: '会员优惠'
					},
					{
						icon: 'coffee',
						dicName: '阿圆咖啡'
					},
					{
						icon: 'fruit',
						dicName: '新鲜水果'
					},
					{
						icon: 'oden',
						dicName: '关东热煮'
					},
					{
						icon: 'cooked',
						dicName: '熟食便当'
					},
					{
						icon: 'bread',
						dicName: '烘焙面包'
					},
					{
						icon: 'drink',
						dicName: '酒水饮料'
					},
					{
						icon: 'ice',
						dicName: '冷冻食品'
					},
					{
						icon: 'life',
						dicName: '生活用品'
					},
				],
				activeItem: 0,
			};
		},

		methods: {
			/**
			 * @param {Object} index 选中项的序号
			 * 所有元素的边框圆角归零
			 * 设置选中项的上一个元素的右下角边框圆角
			 * 设置选中项的下一个元素的右上角边框圆角
			 * 选中最后一项，设置下方矩形的右上角边框圆角
			 */
			handleChangeItem(index) {
				//设置当前选中项
				this.activeItem = index
				const activeItemName = this.itemList[index].dicName
				
				//设置圆角样式
				const items = this.$refs.items
				items.map(item => item.$el.style.borderRadius = '0')
				this.$refs.under.$el.style.borderTopRightRadius = '0'
				if (index > 0) items[index - 1].$el.style.borderBottomRightRadius = '10px'
				if (index !== this.itemList.length - 1) items[index + 1].$el.style.borderTopRightRadius = '10px'
				else this.$refs.under.$el.style.borderTopRightRadius = '10px'
			},
		}
	}
</script>

<style lang="scss">
	.aside-bar-container {
		width: 260rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: $uni-bg-color-base;
	}
	
	.aside-items-wrapper {
		background-color: $uni-bg-color-base;
	}

	.aside-item {
		width: 101%;
		height: 80rpx;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	
	.aside-item:nth-child(2) {
		border-top-right-radius: 20rpx;
	}

	.aside-item-title {
		font-size: $uni-font-size-sm;
		font-weight: 500;
		color: $uni-text-color-title;
	}
	
	.under-wrapper {
		width: 100%;
		height: 100%;
		background-color: $uni-bg-color-grey;
	}

	.active {
		background-color: $uni-bg-color-base;
	}

	.inactive {
		background-color: $uni-bg-color-grey;
	}
</style>
