<!-- 旋转卡片组件 -->
<template>
	<view @click="rotate" class="rotate-card-contianer">
		<view
			:style="{transform: `rotateY(${frontDeg}deg)` , background: frontStyle}"
			class="content">
			<slot></slot>
		</view>

		<view
			:style="{transform: `rotateY(${backDeg}deg)` , backgroundImage: endStyle}"
			class="content">
		</view>
	</view>


</template>

<script>
export default {
    name: "rotate-card",
    props: {
        allowRotate: { //是否允许旋转
            type: Boolean,
            default: true,
            required: false
        },
        duration: { //旋转持续时间
            type: Number,
            default: 1500,
            required: false
        },
        rotateTime: { //旋转一圈的时间
            type: Number,
            default: 500,
            required: false
        },
        frontStyle: { //正面样式
            type: String,
            default: '#F4F4F4',
            required: false
        },
        endStyle: { //背面样式
            type: String,
            default: 'linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%)',
            required: false
        }
    },
    data() {
        return {
            frontDeg: 180, //正面旋转角度
            backDeg: 0, //背面旋转角度
            interval: undefined,
            timer: undefined
        };
    },
    onUnload() {
        if ( this.timer ) clearTimeout( this.timer );
    },
    methods: {
        //点击卡片旋转3次
        rotate() {
            if ( this.interval === undefined && this.allowRotate) {
                let arg = 180;
                this.interval = setInterval( () => {
                    this.frontDeg += arg;
                    this.backDeg += -arg;
                }, this.rotateTime );
                this.timer = setTimeout( () => {
                    clearInterval( this.interval );
                }, this.duration );
                this.$emit('rotate');
            } else {
                this.$emit('stop');
            }
        }
    }
};
</script>

<style lang="scss">
	.rotate-card-contianer {
		width: 90%;
		height: 300rpx;
		flex-shrink: 0;
		position: relative;
		overflow: hidden;
		border-radius: $uni-border-radius-base;
		margin-top: $uni-spacing-base;
	}

	.content {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		position: absolute;
		backface-visibility: hidden;
		transition: 1s linear;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: $uni-border-radius-base;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: 0 0;
		overflow: hidden;
	}
</style>
