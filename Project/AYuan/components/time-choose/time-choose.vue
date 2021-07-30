<!-- 时间选择组件 -->
<template>
	<view class="time-choose-container card">
		<text class="text">{{ text }}</text>
		<text class="time" @click="showTimePicker">{{ defaultTime }}</text>
		<u-picker mode="multiSelector" v-model="showPicker" :default-selector="defaultSelection"
			:range="timeSelections" @confirm="handleConfirm"></u-picker>
	</view>
</template>

<script>
	export default {
		name: "time-choose",
		props: {
			pickUpMethod: String
		},
		data() {
			return {
				showPicker: false,
				defaultSelection: [0, 0],
				time: ''
			};
		},
		computed: {
			//提示文字
			text() {
				return this.pickUpMethod === 'delivery' ?
					'预计送达' : '取货时间'
			},
			defaultTime() {
				if (this.time === '') return this.getTime()
				else return this.time
			},
			//时间选项
			timeSelections() {
				const res = [] , hours = [] , minutes = []
				const time = this.getTime()
				const startHour = parseInt(time.split(':')[0])
				const startMinute = parseInt(time.split(':')[1])
				for (let i = startHour; i < 25; i++) {
					hours.push(this.addPreZero(i))
				}
				for (let j = startMinute; j < 60; j++) {
					minutes.push(this.addPreZero(j))
				}
				res.push(hours)
				res.push(minutes)
				return res
			},
		},
		methods: {
			//获取当前时间的30分钟后的时间
			getTime() {
				const now = new Date().getTime()
				return this.$u.timeFormat(new Date(now + 30*60*1000) , 'hh:MM')
			},
			//时间添加前置0
			addPreZero(num) {
				if (num % 10 === num) {
					return '0'+num
				}
				return num.toString()
			},
			//显示时间选择器
			showTimePicker() {
				this.showPicker = true
			},
			//时间选择器确认回调
			handleConfirm([select1 , select2]) {
				const hour = this.timeSelections[0][select1]
				const minute = this.timeSelections[1][select2]
				this.time = hour + ':' + minute
			}
		}
	}
</script>

<style lang="scss">
	.time-choose-container {
		height: 100rpx;
		justify-content: space-between;
		align-items: center;
		padding-left: $uni-spacing-lg;
		padding-right: $uni-spacing-lg;
		font-size: $uni-font-size-base;
	}

	.text {
		font-weight: bold;
	}

	.time {
		color: $uni-color-main;
	}
</style>
